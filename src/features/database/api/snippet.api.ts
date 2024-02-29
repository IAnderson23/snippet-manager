import {ISnippet} from "../types/database.types.ts";
import db from "../src/database-init.ts";

export function createSnippet(snippet: ISnippet): void {
  db.snippets.add(snippet).then(handleSuccess).catch(handleError);

  function handleSuccess(id: number): void {
    console.log(`Snippet ${id} Was Created`);
  }

  function handleError(e: Error): void {
    alert(`Error Creating Snippet: ` + e);
  }
}

export function updateSnippet(snippetID: number, updatedData: ISnippet): void {
  db.snippets.update(snippetID, updatedData).then(updated => {
    if (updated)
      console.log(`Snippet ${snippetID} Was Updated`);
    else {
      alert('Error Updating Snippet');
      console.log(`Error: No Snippet With A ID Of ${snippetID}`);
    }
  })
}

export function deleteSnippet(snippetID: number): void {
  db.snippets.delete(snippetID).then(handleSuccess)

  function handleSuccess(): void {
    console.log(`Snippet ${snippetID} Was Deleted`);
  }
}
