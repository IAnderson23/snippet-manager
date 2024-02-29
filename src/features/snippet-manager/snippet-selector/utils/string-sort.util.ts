import {ISnippet} from "@features/database";

function stringSort(snippetA: ISnippet, snippetB: ISnippet) {
  if (snippetA.name.toUpperCase() < snippetB.name.toUpperCase())
    return -1;
  else if (snippetA.name.toUpperCase() > snippetA.name.toUpperCase())
    return 1;
  else
    return 0;
}

export default stringSort;
