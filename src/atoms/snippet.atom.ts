import {atom} from 'jotai';

import {ISnippet} from "@database/database.types.ts";
import {Snippet} from "@utils/constructors/database-constructors.util.ts";

export const snippetAtom = atom<ISnippet>(Snippet.default());
