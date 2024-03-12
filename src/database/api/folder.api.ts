import {IFolder} from "../database.types.ts";
import db from "../database-init.ts";

export function createFolder(folder: IFolder): void {
  db.folders.add(folder).then(handleSuccess).catch(handleError)

  function handleSuccess(id: number): void {
    console.log(`Folder ${id} Was Created`)
  }

  function handleError(e: Error): void {
    alert('Error Creating Folder: ' + e);
  }
}

export function updateFolder(folderId: number, updateData: IFolder): void {
  db.folders.update(folderId, updateData).then(updated => {
    if (updated)
      console.log(`Folder ${folderId} Was Updated`)
    else {
      alert('Error Updating Folder');
      console.log(`Error: No Folder With A ID Of ${folderId}`);
    }
  })
}

export function deleteFolder(folderID: number): void {
  db.folders.delete(folderID).then(handleSuccess);

  function handleSuccess(): void {
    console.log(`Folder ${folderID} Was Deleted`)
  }
}
