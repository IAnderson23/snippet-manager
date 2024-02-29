import {ISnippet} from "@features/database/types/database.types.ts";
import {useAtomValue} from "jotai/index";
import {filterAtom} from "@atoms/filter.atom.ts";
import {useAllSnippets} from "@features/snippet-manager";
import {useCallback, useEffect, useState} from "react";


function useFilterTag(): ISnippet[] {
  const {type, target} = useAtomValue(filterAtom);
  const allSnippets = useAllSnippets();
  const [tagSnippets, setTagSnippets] = useState<ISnippet[]>([])

  const filter = useCallback(() => {
    return allSnippets.filter(snippet => snippet.tags.includes(target as string));
  }, [allSnippets, target])

  useEffect(() => {
    if (type === 'tag')
      setTagSnippets(filter());
  }, [filter, type]);

  return tagSnippets;
}

export default useFilterTag;
