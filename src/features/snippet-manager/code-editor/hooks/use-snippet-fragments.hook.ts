import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import useAllFragments from "./use-all-fragments.hook.ts";
import bulkFind from "@features/snippet-manager/utils/bulk-find.function.ts";
import {IFragment} from "@features/database";
import {useEffect, useState} from "react";

function useSnippetFragments(): IFragment[] {
  const snippet = useAtomValue(snippetAtom)
  const fragments = useAllFragments();
  const [snippetFragments, setSnippetFragments] = useState<IFragment[]>([])

  useEffect(() => {
    if (snippet.fragments.length && fragments) {
      setSnippetFragments(bulkFind(snippet.fragments, fragments))
    }
  }, [fragments, snippet.fragments, snippet.id]);

  return snippetFragments;
}

export default useSnippetFragments;
