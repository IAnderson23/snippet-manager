import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {sortConfigAtom} from "@atoms/sort-config.atom.ts";
import useQuery from "../hooks/use-query.hook.ts";
import {ISnippet} from "@features/database";
import sort from "../utils/sort.util.ts";

function useSort() {
  const snippets = useQuery();
  const {sortBy, isAscending} = useAtomValue(sortConfigAtom);
  const [sortedSnippets, setSortedSnippets] = useState<ISnippet[]>([])

  useEffect(() => {
    const sortedList = sort(snippets, sortBy);
    console.log(sortedList)
    const orderList = [...sortedList];

    if (!isAscending)
      orderList.reverse();

    setSortedSnippets(orderList);

  }, [isAscending, snippets, sortBy]);

  return sortedSnippets;
}

export default useSort;
