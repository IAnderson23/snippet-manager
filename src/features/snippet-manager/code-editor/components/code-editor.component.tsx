import {ReactNode} from "react";
import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import EditorHeader from "./editor-header.component.tsx";
import FragmentList from "@features/snippet-manager/code-editor/components/fragment-list.component.tsx";
import EditorWorkspace from "@features/snippet-manager/code-editor/components/editor-workspace.component.tsx";
import EditorFooter from "@features/snippet-manager/code-editor/components/editor-footer.component.tsx";

function CodeEditor(): ReactNode {
  const snippet = useAtomValue(snippetAtom);

  return snippet.id && (
    <div id={'code-editor'}>
      <h1>Code Editor</h1>
      <EditorHeader/>
      <FragmentList/>
      <EditorWorkspace/>
      <EditorFooter/>
    </div>
  )
}

export default CodeEditor;
