import {useAtom} from "jotai";
import {useEffect} from "react";
import {useLiveQuery} from "dexie-react-hooks";

import {allSnippetsAtom} from "@atoms/all-snippets.atom.ts";
import {ISnippet} from "@database/database.types.ts";
import db from "@database/database-init.ts";


function useAllSnippets() {
  const [allSnippets, setAllSnippets] = useAtom(allSnippetsAtom);
  const snippets: ISnippet[] | undefined = useLiveQuery<ISnippet[]>(() => db.snippets.toArray(), []);

  useEffect(() => {
    if (snippets) setAllSnippets(snippets);
  }, [snippets, setAllSnippets]);

  return allSnippets;
}

export default useAllSnippets;
