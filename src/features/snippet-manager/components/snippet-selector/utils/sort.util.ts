import {ISnippet} from "@database/database.types.ts";

function sort(snippets: ISnippet[], sortBy: string) {
  if (sortBy === "name")
    return nameSort(snippets)
  else if (sortBy === "created")
    return dateSort(snippets);
  else
    return snippets;
}

export default sort;

function nameSort(snippets: ISnippet[]) {
  const numArr = snippets.filter(snippet => !!+snippet.name)
    .sort((a, b) => +a.name - +b.name);

  const strArr = snippets.filter(snippet => !+snippet.name)
    .sort(stringSort);

  return numArr.concat(strArr);
}

function stringSort(snippetA: ISnippet, snippetB: ISnippet) {
  if (snippetA.name.toUpperCase() < snippetB.name.toUpperCase())
    return -1;
  else if (snippetA.name.toUpperCase() > snippetA.name.toUpperCase())
    return 1;
  else
    return 0;
}

function dateSort(snippets: ISnippet[]) {
  return snippets.sort((a, b) => a.created - b.created);
}
