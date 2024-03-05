import {atom} from 'jotai';
import {ISnippet} from "@features/database";
import {Snippet} from "@utils/constructors/database-constructors.util.ts";

export const snippetAtom = atom<ISnippet>(Snippet.create());
