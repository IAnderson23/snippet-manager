import {useAtomValue} from "jotai";
import {useCallback, useEffect, useState} from "react";

import userQueryAtom from "@atoms/user-query.atom.ts";
import useFilter from "../hooks/use-filter.hook.ts";
import {ISnippet} from "@features/database";

function useQuery() {
  const userQuery = useAtomValue(userQueryAtom);
  const filterSnippets = useFilter();
  const [querySnippets, setQuerySnippets] = useState<ISnippet[]>([]);

  const filter = useCallback(() => {
    return filterSnippets?.filter(snippet => snippet.name.includes(userQuery));
  }, [filterSnippets, userQuery])

  useEffect(() => {
    setQuerySnippets(filter());
  }, [filter]);

  return querySnippets;
}

export default useQuery;
