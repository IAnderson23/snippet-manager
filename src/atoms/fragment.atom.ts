import {atom} from "jotai";
import {IFragment} from "@database/database.types.ts";
import {Fragment} from "@utils/constructors/database-constructors.util.ts";

export const fragmentAtom = atom<IFragment>(Fragment.default());
