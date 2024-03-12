import {useEffect} from "react";

import {useLiveQuery} from "dexie-react-hooks";
import {useAtom} from "jotai";
import {allFragmentsAtom} from "@atoms/all-fragments.atom.ts";
import {IFragment} from "@database/database.types.ts";
import db from "@database/database-init.ts";

function useAllFragments(): IFragment[] | undefined {
  const [allFragments, setAllFragments] = useAtom(allFragmentsAtom);
  const fragments = useLiveQuery(() => db.fragments.toArray(), []);

  useEffect(() => {
    if (fragments)
      setAllFragments(fragments);
  }, [fragments, setAllFragments]);

  return allFragments;
}

export default useAllFragments;
