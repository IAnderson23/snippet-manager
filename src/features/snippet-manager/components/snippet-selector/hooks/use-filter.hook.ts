import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {filterAtom} from "@atoms/filter.atom.ts";
import {ISnippet} from "@database/database.types.ts";
import useAllSnippets from "./use-all-snippets.hook.ts";
import useRecentSnippets from "./use-recent-snippets.hook.ts";

function useFilter() {
  const {type, target} = useAtomValue(filterAtom);
  const allSnippets = useAllSnippets();
  const {recentSnippets} = useRecentSnippets();
  const [filterSnippets, setFilterSnippets] = useState<ISnippet[]>([])

  useEffect(() => {
    if(type === 'smartGroup')
      setFilterSnippets(filterBySmartGroup(allSnippets, target, recentSnippets));
    else if(type === 'folder')
      setFilterSnippets(filterByFolder(allSnippets, target));
    else if(type === 'tag')
      setFilterSnippets(filterByTag(allSnippets, target));
  }, [allSnippets, recentSnippets, target, type]);

  return filterSnippets;
}

export default useFilter;

function filterByFolder(snippets: ISnippet[], folderId: number): ISnippet[] {
  return snippets.filter(snippet => snippet.folderId === folderId)
}

function filterBySmartGroup(snippets: ISnippet[], target: string, recentSnippets: ISnippet[]): ISnippet[] {
  if(target === 'all')
    return snippets;
  else if (target === 'uncategorized')
    return snippets.filter(snippet => snippet.folderId === 0);
  else if (target === 'recent')
    return recentSnippets;
  else
    return [];
}

function filterByTag(snippets: ISnippet[], target: string): ISnippet[] {
  return snippets.filter(snippet => snippet.tags.includes(target));
}
