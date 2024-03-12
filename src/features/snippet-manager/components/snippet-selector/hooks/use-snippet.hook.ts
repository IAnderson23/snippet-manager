import {useAtomValue} from "jotai";
import {allSnippetsAtom} from "@atoms/all-snippets.atom.ts";
import {ISnippet} from "@database/database.types.ts";


function useSnippet(snippetId: number): ISnippet | undefined {
  const snippets = useAtomValue(allSnippetsAtom)

  return snippets.find(snippet => snippet.id === snippetId);
}

export default useSnippet;
