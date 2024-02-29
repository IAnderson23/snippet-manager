import {atom} from "jotai";

interface ISortConfig {
  sortBy: string;
  isAscending: boolean;
}

export const sortConfigAtom = atom<ISortConfig>({sortBy: "created", isAscending: false});
