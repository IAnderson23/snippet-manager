import {atom} from "jotai";
import {ISnippet} from "@database/database.types.ts";


export const allSnippetsAtom = atom<ISnippet[]>([])
