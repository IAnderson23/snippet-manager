import {IFolder, IFragment, ISnippet} from "../database/database.types.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {atom} from "jotai";


export interface IModal {
  type?: 'create' | 'edit' | 'delete'
  subType?: 'folder' | 'snippet' | 'fragment'
  target?: IFolder | ISnippet | IFragment
}

export const modalAtom = atom<IModal>(Modal.default());
