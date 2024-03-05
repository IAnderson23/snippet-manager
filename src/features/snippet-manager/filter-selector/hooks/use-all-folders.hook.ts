import {useEffect, useState} from "react";
import {useLiveQuery} from "dexie-react-hooks";

import {IFolder} from "@features/database";
import {db} from "@features/database";

function useAllFolders(): IFolder[] {
  const [allFolders, setAllFolders] = useState<IFolder[]>([]);
  const folders: IFolder[] | undefined = useLiveQuery(() => db.folders.toArray(), []);

  useEffect(() => {
    if (folders) setAllFolders(folders);
  }, [folders, setAllFolders]);

  return allFolders;
}

export default useAllFolders;
