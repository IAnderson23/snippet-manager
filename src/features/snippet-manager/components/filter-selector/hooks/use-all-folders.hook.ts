import {useEffect} from "react";
import {useLiveQuery} from "dexie-react-hooks";
import {IFolder} from "@database/database.types.ts";
import db from "@database/database-init.ts";
import {allFoldersAtom} from "@atoms/all-folders.atom.ts";
import {useAtom} from "jotai";



function useAllFolders(): IFolder[] {
  const [allFolders, setAllFolders] = useAtom(allFoldersAtom);
  const folders: IFolder[] | undefined = useLiveQuery(() => db.folders.toArray(), []);

  useEffect(() => {
    if (folders) setAllFolders(folders);
  }, [folders, setAllFolders]);

  return allFolders;
}

export default useAllFolders;
