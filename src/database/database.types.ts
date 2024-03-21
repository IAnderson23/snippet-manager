import {LanguageName} from "@uiw/codemirror-extensions-langs";

export interface IFolder {
  id?: number;
  name: string;
  order: number;
  snippets: number[];
  isFavorite: boolean;
}

export interface ISnippet {
  id?: number;
  folderId: number;
  name: string;
  tags: string[];
  fragments: number[];
  isFavorite: boolean;
  lastViewed: number;
  created: number;
}

export interface IFragment {
  id?: number;
  snippetId: number;
  name: string;
  code: string;
  language: LanguageName;
  order: number;
}
