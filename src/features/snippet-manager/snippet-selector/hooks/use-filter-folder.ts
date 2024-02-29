import {useAtomValue} from "jotai";
import {useCallback, useEffect, useState} from "react";

import {ISnippet} from "@features/database/types/database.types.ts";
import {useAllSnippets} from "@features/snippet-manager";
import {filterAtom} from "@atoms/filter.atom.ts";

function useFilterFolder() {
  const {type, target} = useAtomValue(filterAtom);
  const allSnippets = useAllSnippets();
  const [folderSnippets, setFolderSnippets] = useState<ISnippet[]>([])

  const filter = useCallback((): ISnippet[] => {
    return allSnippets.filter(snippet => snippet.folderId === target);
  }, [allSnippets, target])

  useEffect(() => {
    if (type === 'folder')
      setFolderSnippets(filter())
  }, [filter, type]);

  return folderSnippets;
}

export default useFilterFolder;
