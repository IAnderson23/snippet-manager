import {atom} from "jotai";

import {IFolder} from "@features/database";

export const allFoldersAtom = atom<IFolder[]>([]);
