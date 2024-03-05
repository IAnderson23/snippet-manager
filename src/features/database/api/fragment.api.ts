import db from "../src/database-init.ts";
import {IFragment} from "../types/database.types.ts";

export async function createFragment(fragment: IFragment): Promise<void> {
  const snippet = await db.snippets.get(fragment.snippetId);

  if (snippet) {
    const fragmentId = await db.fragments.add(fragment);
    snippet.fragments.push(fragmentId);

    db.snippets.update(snippet.id!, snippet).then(updated => {
      if (updated)
        console.log(`Fragment ${fragmentId} Was Created`)
      else {
        deleteFragment(fragmentId);
        console.log(`Error Updating Snippet With Id Of ${snippet.id}`)
      }
    })
  } else {
    console.log(`Error Could Not Find Snippet With Given Id`);
  }
}

export function updateFragment(fragmentID: number, updatedData: IFragment): void {
  db.fragments.update(fragmentID, updatedData).then(updated => {
    if (updated)
      console.log(`Fragment ${fragmentID} Was Updated`)
    else {
      alert('Error Updating Fragment');
      console.log(`Error: No Fragment With A ID Of ${fragmentID}`)
    }
  })
}

export function deleteFragment(fragmentID: number): void {
  db.fragments.delete(fragmentID).then(handleSuccess)

  function handleSuccess(): void {
    console.log(`Fragment ${fragmentID} Was Deleted`)
  }
}
