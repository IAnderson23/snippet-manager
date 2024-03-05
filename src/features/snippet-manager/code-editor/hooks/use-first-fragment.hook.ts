import {useAtom} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {useEffect} from "react";
import reorderFragments from "@features/snippet-manager/code-editor/utils/reorder-fragments.function.ts";
import {isEmpty} from "lodash";
import {IFragment} from "@features/database";

function useFirstFragment(snippetFragments: IFragment[]): void {
  const [fragment, setFragment] = useAtom(fragmentAtom);

  useEffect(() => {
    if (fragment === undefined) {
      const first = snippetFragments.find(fragment => fragment.order === 1);

      if (first)
        setFragment(first)
      else if (!first && !isEmpty(snippetFragments))
        reorderFragments(snippetFragments);
    }
  }, [setFragment, snippetFragments]);
}

export default useFirstFragment;
