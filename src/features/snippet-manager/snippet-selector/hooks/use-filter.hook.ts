import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import useFilterSmartGroup from "../hooks/use-filter-smart-group.hook.ts";
import {ISnippet} from "@features/database/types/database.types.ts";
import useFilterFolder from "../hooks/use-filter-folder.ts";
import useFilterTag from "../hooks/use-filter-tag.hook.ts";
import {filterAtom} from "@atoms/filter.atom.ts";

function useFilter() {
  const {type} = useAtomValue(filterAtom);
  const smartGroupSnippets = useFilterSmartGroup();
  const folderSnippets = useFilterFolder();
  const tagSnippets = useFilterTag();
  const [filterSnippets, setFilterSnippets] = useState<ISnippet[]>([])

  useEffect(() => {
    if(type === 'smartGroup')
      setFilterSnippets(smartGroupSnippets);
    else if(type === 'folder')
      setFilterSnippets(folderSnippets);
    else if(type === 'tag')
      setFilterSnippets(tagSnippets);
  }, [type, smartGroupSnippets, folderSnippets, tagSnippets]);

  return filterSnippets;
}

export default useFilter;
