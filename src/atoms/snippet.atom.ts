import {atom} from 'jotai';

import {Snippet} from "@utils/constructors/database-constructors.util.ts";
import {ISnippet} from "@database/database.types.ts";

export const snippetAtom = atom<ISnippet>(Snippet.create());
