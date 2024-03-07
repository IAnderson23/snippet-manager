import {useAtom, useAtomValue} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {useEffect} from "react";
import reorderFragments from "../utils/reorder-fragments.function.ts";
import {isEmpty} from "lodash";
import {IFragment} from "@features/database";
import {snippetAtom} from "@atoms/snippet.atom.ts";

function useFirstFragment(snippetFragments: IFragment[]): void {
  const snippet = useAtomValue(snippetAtom);
  const [fragment, setFragment] = useAtom(fragmentAtom);

  useEffect(() => {
    setFragment(undefined)
  }, [setFragment, snippet.id]);

  useEffect(() => {
    if (fragment === undefined) {
      const first = snippetFragments.find(fragment => fragment.order === 1);

      if (first)
        setFragment(first)
      else if (!first && !isEmpty(snippetFragments))
        reorderFragments(snippetFragments);
    }
  }, [fragment, setFragment, snippetFragments]);
}

export default useFirstFragment;
