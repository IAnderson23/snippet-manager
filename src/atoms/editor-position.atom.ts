import {atom} from "jotai";

export interface IEditorPosition {
  line: number
  column: number
}

export const editorPositionAtom = atom<IEditorPosition>({line: 1, column: 1});
