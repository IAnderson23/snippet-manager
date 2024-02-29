import {ISnippet} from "@features/database";
import stringSort from "./string-sort.util.ts";


function nameSort(snippets: ISnippet[]) {
  const numArr = snippets.filter(snippet => !!+snippet.name)
    .sort((a, b) => +a.name - +b.name);

  const strArr = snippets.filter(snippet => !+snippet.name)
    .sort(stringSort);

  return numArr.concat(strArr);
}

export default nameSort;
