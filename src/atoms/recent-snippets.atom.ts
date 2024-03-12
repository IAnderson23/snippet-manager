import {atom} from "jotai";
import {ISnippet} from "@database/database.types.ts";



export const recentSnippetsAtom = atom<ISnippet[]>([]);
