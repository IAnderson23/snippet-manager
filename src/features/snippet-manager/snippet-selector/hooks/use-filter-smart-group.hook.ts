import {useAtomValue} from "jotai";
import {filterAtom} from "@atoms/filter.atom.ts";
import {useAllSnippets} from "@features/snippet-manager";
import {ISnippet} from "@features/database";
import useRecentSnippets from "../hooks/use-recent-snippets.hook.ts";
import {useCallback, useEffect, useState} from "react";


function useFilterSmartGroup() {
  const {type, target} = useAtomValue(filterAtom);
  const allSnippets = useAllSnippets();
  const {recentSnippets} = useRecentSnippets();
  const [smartGroupSnippets, setSmartGroupSnippets] = useState<ISnippet[]>([]);

  const filter = useCallback((): ISnippet[] => {
    if(target === 'all')
      return allSnippets;
    else if (target === 'uncategorized')
      return allSnippets.filter(snippet => snippet.folderId === 0);
    else if (target === 'recent')
      return recentSnippets;
    else
      return [];
  }, [allSnippets, recentSnippets, target])

  useEffect(() => {
    if (type === 'smartGroup')
      setSmartGroupSnippets(filter());
  }, [filter, type]);

  return smartGroupSnippets;
}

export default useFilterSmartGroup;
