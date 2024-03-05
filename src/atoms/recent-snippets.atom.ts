import {atom} from "jotai";

import {ISnippet} from "@features/database";

export const recentSnippetsAtom = atom<ISnippet[]>([]);
