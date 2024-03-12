import {ReactNode} from "react";
import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import EditorHeader from "./editor-header.component.tsx";
import FragmentList from "./fragment-list.component.tsx";
import EditorWorkspace from "./editor-workspace.component.tsx";
import EditorFooter from "./editor-footer.component.tsx";

function CodeEditor(): ReactNode {
  const snippet = useAtomValue(snippetAtom);

  return snippet.id && (
    <div id={'code-editor'}>
      <EditorHeader/>
      <FragmentList/>
      <EditorWorkspace/>
      <EditorFooter/>
    </div>
  )
}

export default CodeEditor;