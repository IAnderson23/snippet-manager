import {atom} from "jotai";
import {IFragment} from "@database/database.types.ts";


export const fragmentAtom = atom<IFragment | undefined>(undefined);
