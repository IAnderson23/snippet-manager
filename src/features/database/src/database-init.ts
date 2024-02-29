import Dexie, {Table} from "dexie";
import {IFolder, IFragment, ISnippet} from "../types/database.types.ts";

class MyDexie extends Dexie {
  folders!: Table<IFolder, number>
  snippets!: Table<ISnippet, number>
  fragments!: Table<IFragment, number>

  constructor() {
    super('MyDatabase');

    this.version(1).stores({
      folders: '++id, &name, order, isFavorite',
      snippets: "++id, folderID, name, *tags, isFavorite, lastViewed",
      fragments: "++id, snippetID, name, code, language, order"
    })
  }
}

const db = new MyDexie();

export default db;
