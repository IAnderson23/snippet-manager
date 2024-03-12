import {atom} from "jotai";
import {IFragment} from "@database/database.types.ts";


export const allFragmentsAtom = atom<IFragment[] | undefined>(undefined)
