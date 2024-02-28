import {useAtom} from "jotai";

import {IFolder} from "../../../../database/database.types.ts";
import {allFoldersAtom} from "@atoms/all-folders.atom.ts";
import {db} from "../../../../database/database-init.ts";
import {useLiveQuery} from "dexie-react-hooks";
import {useEffect} from "react";

function useAllFolder(): IFolder[] {
  const [allFolders, setAllFolders] = useAtom(allFoldersAtom);
  const folders: IFolder[] | undefined = useLiveQuery(() => db.folders.toArray(), []);

  useEffect(() => {
    if (folders) setAllFolders(folders);
  }, [folders, setAllFolders]);

  return allFolders;
}

export default useAllFolder;
