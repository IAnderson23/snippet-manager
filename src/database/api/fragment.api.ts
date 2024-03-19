import db from "../database-init.ts";
import {IFragment} from "../database.types.ts";

interface IResponse {
  status: 'ok' | 'error';
  message: string;
}

export async function createFragment(fragment: IFragment): Promise<IResponse> {
  const snippet = await db.snippets.get(fragment.snippetId);
  let response: IResponse;

  if (snippet) {
    const fragmentId = await db.fragments.add(fragment);
    snippet.fragments.push(fragmentId);

    const isUpdated = await db.snippets.update(snippet.id!, snippet);

    if (isUpdated)
      response = {status: "ok", message: `Fragment ${fragmentId} Was Created`};
    else {
      deleteFragment(fragmentId, {isSilent: true});
      response = {status: "error", message: `Error Updating Snippet With Id Of ${snippet.id}`}
    }
  } else
    response = {status: 'error', message: `Error Could Not Find Snippet With Given Id`};

  return response;
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

interface IDeleteOption {
  isSilent: boolean
}

export function deleteFragment(fragmentID: number, option: IDeleteOption = {isSilent: false}): void {
  db.fragments.delete(fragmentID).then(handleSuccess)

  function handleSuccess(): void {
    if (!option.isSilent)
      console.log(`Fragment ${fragmentID} Was Deleted`)
  }
}
