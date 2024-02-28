import {atom} from "jotai";
import {ISnippet} from "../database/database.types.ts";


const allSnippetsAtom = atom<ISnippet[]>([]);

export default allSnippetsAtom;
