import {IFolder, IFragment, ISnippet} from "@database/database.types";
import {Folder, Fragment, Snippet} from "@utils/constructors/database-constructors.util.ts";
import db from "@database/database-init.ts";


declare global {
  interface Window {
    devTools: {
      init(): void;
    };
  }
}

const devTools = {
  init() {
    db.delete();
    db.open();

    const folder1: IFolder = {...Folder.create('React'), snippets: [1, 2]}
    const folder2: IFolder = {...Folder.create('Vue'), snippets: [3]}
    const folder3: IFolder = {...Folder.create('Algorithms'), snippets: [4]}
    const folder4: IFolder = {...Folder.create('Order Test'), snippets: [7, 8, 9]}
    const folders: IFolder[] = [folder1, folder2, folder3, folder4];

    const snippet1: ISnippet = {...Snippet.create(1, "Quick Start", ["JavaScript", "Quick Start"]), fragments: [1]};
    const snippet2: ISnippet = {...Snippet.create(1, "Custom Hooks", ["JavaScript"]), fragments: [2]};
    const snippet3: ISnippet = {...Snippet.create(2, "Quick Start", ["JavaScript", "Quick Start"]), fragments: [3]};
    const snippet4: ISnippet = {...Snippet.create(3, "Sorting Functions", ["C++"]), fragments: [4]};
    const snippet5: ISnippet = {...Snippet.create(0, "Math Operations", ["C++"]), fragments: [5, 6, 7, 8]};
    const snippet6: ISnippet = {...Snippet.create(0, "No Fragments Test", ["Test"]), fragments: []};
    const snippet7: ISnippet = {...Snippet.create(4, "2", ["Test"]), fragments: []};
    const snippet8: ISnippet = {...Snippet.create(4, "1", ["Test"]), fragments: []};
    const snippet9: ISnippet = {...Snippet.create(4, "3", ["Test"]), fragments: []};
    const snippet10: ISnippet = {...Snippet.create(0, "6", ["Test"]), fragments: []};
    const snippet11: ISnippet = {...Snippet.create(0, "Recent Test", ["Test"]), fragments: []};
    const snippets: ISnippet[] = [snippet1, snippet2, snippet3, snippet4, snippet5, snippet6, snippet7, snippet8, snippet9, snippet10, snippet11];

    const fragment1: IFragment = {...Fragment.create(1, 1), code: "function ReactQuickStart() {\n  console.log(\"hi\");\n}"}
    const fragment2: IFragment = {...Fragment.create(2, 1), code: "function ReactCustomHook() {\n  console.log(\"hi\");\n}"}
    const fragment3: IFragment = {...Fragment.create(3, 1), code: "function VueQuickStart() {\n  console.log(\"hi\");\n}"}
    const fragment4: IFragment = {...Fragment.create(4, 1), code: "function AlgorithmsSortingFunction() {\n  console.log(\"hi\");\n}"}
    const fragment5: IFragment = {...Fragment.create(5, 1), code: "function add(a, b) {\n  return a + b;\n}"}
    const fragment6: IFragment = {...Fragment.create(5, 2), code: "function subtract(a, b) {\n  return a - b;\n}"}
    const fragment7: IFragment = {...Fragment.create(5, 3), code: "function multiply(a, b) {\n  return a * b;\n}"}
    const fragment8: IFragment = {...Fragment.create(5, 4), code: "function divide(a, b) {\n  return a / b;\n}"}
    const fragments: IFragment[] =  [fragment1, fragment2, fragment3, fragment4, fragment5, fragment6, fragment7, fragment8];

    db.folders.bulkPut(folders);
    db.snippets.bulkPut(snippets);
    db.fragments.bulkPut(fragments);

    console.log("Database Initialized")
  }
}

export default devTools;
