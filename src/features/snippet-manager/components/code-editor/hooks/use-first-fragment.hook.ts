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
    if (fragment?.snippetId !== snippet.id) {
      const first = snippetFragments.find(fragment => fragment.order === 1);

      if (first)
        setFragment(first)
      else if (!first && !isEmpty(snippetFragments))
        reorderFragments(snippetFragments);
    }
  }, [fragment, setFragment, snippet.id, snippetFragments]);
}

export default useFirstFragment;
