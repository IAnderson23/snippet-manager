import {useAtomValue} from "jotai";
import {allFoldersAtom} from "@atoms/all-folders.atom.ts";


function useFolderOptionList() {
  const allFolders = useAtomValue(allFoldersAtom);

  return allFolders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)
}

export default useFolderOptionList;
