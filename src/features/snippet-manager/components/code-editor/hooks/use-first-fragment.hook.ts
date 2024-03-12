import {useAtom, useAtomValue} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {useEffect} from "react";
import reorderFragments from "../utils/reorder-fragments.function.ts";
import {isEmpty} from "lodash";

import {IFragment} from "@database/database.types.ts";
import {snippetAtom} from "@atoms/snippet.atom.ts";

function useFirstFragment(snippetFragments: IFragment[]): void {
  const snippet = useAtomValue(snippetAtom)
  const [fragment, setFragment] = useAtom(fragmentAtom);

  useEffect(() => {
    const isIdDifferent = fragment?.snippetId !== snippet.id;
    const isFragmentDeleted = !snippet.fragments.some(fragmentId => fragmentId === fragment?.id)
    const hasFragments = !isEmpty(snippetFragments)

    if (hasFragments && (isFragmentDeleted || isIdDifferent)) {
      const first = snippetFragments.find(fragment => fragment.order === 1);

      if (first)
        setFragment(first)
      else
        reorderFragments(snippetFragments);
    }
  }, [fragment, setFragment, snippet.fragments, snippet.id, snippetFragments]);
}

export default useFirstFragment;
