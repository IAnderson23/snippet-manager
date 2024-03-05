import {atom} from "jotai";
import {IFragment} from "@features/database";


export const fragmentAtom = atom<IFragment | undefined>(undefined);
