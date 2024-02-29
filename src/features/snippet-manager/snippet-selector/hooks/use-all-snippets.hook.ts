import {ISnippet} from "../../../../database/database.types.ts";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../../../database/database-init.ts";
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
