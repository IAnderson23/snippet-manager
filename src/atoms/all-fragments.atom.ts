import {atom} from "jotai";
import {IFragment} from "@features/database";

export const allFragmentsAtom = atom<IFragment[] | undefined>(undefined)
