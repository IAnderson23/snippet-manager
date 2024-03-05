import {useEffect, useState} from "react";
import {db, IFragment} from "@features/database";
import {useLiveQuery} from "dexie-react-hooks";

function useAllFragments(): IFragment[] | undefined {
  const [allFragments, setAllFragments] = useState<IFragment[]>([]);
  const fragments = useLiveQuery(() => db.fragments.toArray(), []);

  useEffect(() => {
    if (fragments)
      setAllFragments(fragments);
  }, [fragments]);

  return allFragments;
}

export default useAllFragments;
