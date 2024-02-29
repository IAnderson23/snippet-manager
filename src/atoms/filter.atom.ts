import {atom} from "jotai";
import Filter from "@utils/constructors/filter-constructor.util.ts";


export interface IFilter {
  type: 'folder' | 'tag' | 'smartGroup';
  target: string | number;
}

export const filterAtom = atom<IFilter>(Filter.default())

