import {atom} from "jotai";
import Filter from "@utils/constructors/filter-constructor.util.ts";

interface ISmartGroupFilter {
  type: 'smartGroup';
  target: string;
}

interface IFolderFilter {
  type: 'folder';
  target: number;
}

interface ITagFilter {
  type: 'tag';
  target: string;
}

export type IFilter = ISmartGroupFilter | IFolderFilter | ITagFilter

export const filterAtom = atom<IFilter>(Filter.default())

