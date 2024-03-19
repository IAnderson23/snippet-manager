import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";
import {atom} from "jotai";

interface IFolderTarget {
  type: 'folder';
  item: IFolder;
}

interface ISnippetTarget {
  type: 'snippet';
  item: ISnippet;
}

interface IFragmentTarget {
  type: 'fragment';
  item: IFragment;
}

export type IAction = 'create' | 'edit' | 'delete';
export type ITarget = IFolderTarget | ISnippetTarget | IFragmentTarget;

export interface IModal {
  action: IAction
  target: ITarget
}

export const modalAtom = atom<IModal | undefined>(undefined);
