import {IFolder, IFragment, ISnippet} from "../../database/database.types.ts";

export class Folder {
  static create(name?: string): IFolder {
    return ({
      name: name ?? '',
      order: 0,
      snippets: [],
      isFavorite: false,
    })
  }
}

export class Snippet {
  static create(folderId?: number, name?: string, tags?: string[]): ISnippet {
    return ({
      folderId: folderId ?? 0,
      name: name ?? '',
      tags: tags ?? [],
      fragments: [],
      isFavorite: false,
      lastViewed: Date.now(),
      created: Date.now(),
    })
  }
}

export class Fragment {
  static create(snippetId?: number, name?: string): IFragment {
    return ({
      snippetId: snippetId ?? 0,
      name: name ?? 'Fragment',
      code: 'console.log("Hello World");',
      language: 'Javascript',
      order: 0,
    })
  }
}
