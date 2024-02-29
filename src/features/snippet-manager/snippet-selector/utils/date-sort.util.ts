import {ISnippet} from "@features/database";

function dateSort(snippets: ISnippet[]) {
  return snippets.sort((a, b) => a.created - b.created);
}

export default dateSort;
