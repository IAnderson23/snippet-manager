import {ISnippet} from "@features/database/types/database.types.ts";
import {useLiveQuery} from "dexie-react-hooks";
import db from "@features/database/src/database-init.ts";
import {useEffect, useState} from "react";

function useAllSnippets() {
  const [allSnippets, setAllSnippets] = useState<ISnippet[]>([]);
  const snippets: ISnippet[] | undefined = useLiveQuery<ISnippet[]>(() => db.snippets.toArray(), []);

  useEffect(() => {
    if (snippets) setAllSnippets(snippets);
  }, [snippets, setAllSnippets]);

  return allSnippets;
}

export default useAllSnippets;