import {useAtomValue, useSetAtom} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {useEffect} from "react";
import useSnippetFragments from "@features/snippet-manager/code-editor/hooks/use-snippet-fragments.hook.ts";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import reorderFragments from "@features/snippet-manager/code-editor/utils/reorder-fragments.function.ts";
import {isEmpty} from "lodash";

function useFirstFragment(): void {
  const snippet = useAtomValue(snippetAtom);
  const fragments = useSnippetFragments();
  const setFragment = useSetAtom(fragmentAtom);

  useEffect(() => {
    const first = fragments.find(fragment => fragment.order === 1);

    if (first)
      setFragment(first);
    else if (!first && !isEmpty(fragments))
      reorderFragments(fragments);
    else if (isEmpty(fragments)) {
    }
  }, [setFragment, fragments, snippet.id]);
}

export default useFirstFragment;
