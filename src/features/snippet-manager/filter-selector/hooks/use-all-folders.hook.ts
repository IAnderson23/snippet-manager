import {IFolder} from "../../../../database/database.types.ts";
import {db} from "../../../../database/database-init.ts";
import {useLiveQuery} from "dexie-react-hooks";
import {useEffect, useState} from "react";

function useAllFolders(): IFolder[] {
  const [allFolders, setAllFolders] = useState<IFolder[]>([]);
  const folders: IFolder[] | undefined = useLiveQuery(() => db.folders.toArray(), []);

  useEffect(() => {
    if (folders) setAllFolders(folders);
  }, [folders, setAllFolders]);

  return allFolders;
}

export default useAllFolders;
