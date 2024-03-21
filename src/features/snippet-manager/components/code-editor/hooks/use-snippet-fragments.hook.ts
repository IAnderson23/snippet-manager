import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import useAllFragments from "./use-all-fragments.hook.ts";

import {useEffect, useState} from "react";
import {Fragment} from "@utils/constructors/database-constructors.util.ts";
import {IFragment} from "@database/database.types.ts";
import {createFragment} from "@database/api/fragment.api.ts";

function useSnippetFragments(): IFragment[] {
  const snippet = useAtomValue(snippetAtom)
  const fragments = useAllFragments();
  const [snippetFragments, setSnippetFragments] = useState<IFragment[]>([])

  useEffect(() => {
    if (fragments) {
      const foundFragments = fragments.filter(fragment => fragment.snippetId === snippet.id);

      if (foundFragments.length)
        setSnippetFragments(foundFragments)
      else {
        const newFragment = Fragment.default(snippet.id!);
        createFragment(newFragment)
      }

    }
  }, [fragments, snippet.id]);

  return snippetFragments;
}

export default useSnippetFragments;
