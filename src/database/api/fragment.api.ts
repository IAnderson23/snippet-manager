import db from "../database-init.ts";
import {IFragment} from "../database.types.ts";

interface IResponse {
  status: 'ok' | 'error';
  message: string;
  options?: {
    isSilent: boolean;
  }
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

  if(response.status === 'error')
    alert('Error Creating Fragment');

  return response;
}

export async function updateFragment(fragmentID: number, updatedData: IFragment): Promise<IResponse> {
  const isUpdated = await db.fragments.update(fragmentID, updatedData)
  let response: IResponse;

  if (isUpdated)
    response = {status: 'ok', message:`Fragment ${fragmentID} Was Updated`}
  else
    response = {status: 'error', message: `Error: No Fragment With A ID Of ${fragmentID}`}

  if(response.status === 'error')
    alert('Error Updating Fragment');

  return response;
}

interface IDeleteOption {
  isSilent: boolean
}

export function deleteFragment(fragmentID: number, options: IDeleteOption = {isSilent: false}): Promise<IResponse> {
  return new Promise<IResponse>((resolve) => {
    db.fragments.delete(fragmentID);
    resolve({status: 'ok', message: `Fragment ${fragmentID} Was Deleted`, options:)
  })

  function handleSuccess(): void {
    if (!options.isSilent)
      console.log(`Fragment ${fragmentID} Was Deleted`)
  }
}
