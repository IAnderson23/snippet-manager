import {atom} from "jotai";
import {IFolder} from "@database/database.types.ts";


export const allFoldersAtom = atom<IFolder[]>([]);
