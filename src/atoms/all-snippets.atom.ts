import {atom} from "jotai";
import {ISnippet} from "@features/database";

export const allSnippetsAtom = atom<ISnippet[]>([])
