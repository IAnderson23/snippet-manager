import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";

export function isFolder(item: IFolder | ISnippet | IFragment): item is IFolder {
  return (item as IFolder).snippets !== undefined;
}

export function isSnippet(item: IFolder | ISnippet | IFragment): item is ISnippet {
  return (item as ISnippet).fragments !== undefined;
}

export function isFragment(item: IFolder | ISnippet | IFragment): item is IFragment {
  return (item as IFragment).language !== undefined;
}

