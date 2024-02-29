import {ISnippet} from "@features/database";
import nameSort from "./name-sort.util.ts";
import dateSort from "./date-sort.util.ts";

function sort(snippets: ISnippet[], sortBy: string) {
  if (sortBy === "name")
    return nameSort(snippets)
  else if (sortBy === "created")
    return dateSort(snippets);
  else
    return snippets;
}

export default sort;
