import {useEffect} from "react";
import {db, IFragment} from "@features/database";
import {useLiveQuery} from "dexie-react-hooks";
import {useAtom} from "jotai";
import {allFragmentsAtom} from "@atoms/all-fragments.atom.ts";

function useAllFragments(): IFragment[] | undefined {
  const [allFragments, setAllFragments] = useAtom(allFragmentsAtom);
  const fragments = useLiveQuery(() => db.fragments.toArray(), []);

  useEffect(() => {
    if (fragments)
      setAllFragments(fragments);
  }, [fragments]);

  return allFragments;
}

export default useAllFragments;
