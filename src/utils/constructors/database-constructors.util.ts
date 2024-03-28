import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";

export class Folder {
  static default(): IFolder {
    return this.create("")
  }

  static create(name: string): IFolder {
    return ({
      name: name,
      order: 0,
      snippets: [],
      isFavorite: false,
    })
  }
}

export class Snippet {
  static default(): ISnippet {
    return this.create(0, "");
  }

  static create(folderId: number, name: string, tags?: string[]): ISnippet {
    return ({
      folderId: folderId,
      name: name,
      tags: tags ?? [],
      fragments: [],
      isFavorite: false,
      lastViewed: Date.now(),
      created: Date.now(),
    })
  }
}

export class Fragment {
  static default(): IFragment {
    return this.create(0, 0);
  }

  static create(snippetId: number, order: number): IFragment {
    return ({
      snippetId: snippetId,
      name: 'Fragment',
      code: 'console.log("Hello World");',
      language: 'javascript',
      order: order,
    })
  }
}
