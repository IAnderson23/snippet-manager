import db from "../src/database-init.ts";
import {IFragment} from "../types/database.types.ts";

export async function createFragment(fragment: IFragment): Promise<void> {
  const snippet = await db.snippets.get(fragment.snippetId);
  snippet?.fragments.push(fragment.id!);

  await db.snippets.update(snippet!.id!, {fragments: snippet?.fragments});
  await db.fragments.add(fragment).then(handleSuccess).catch(handleError)

  function handleSuccess(id: number): void {
    console.log(`Fragment ${id} Was Created`)
  }

  function handleError(e: Error): void {
    alert (`Error Creating Fragment: ` + e)
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
