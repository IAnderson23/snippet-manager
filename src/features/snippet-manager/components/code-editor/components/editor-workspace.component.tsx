import {useAtomValue, useSetAtom} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {editorPositionAtom, IEditorPosition} from "@atoms/editor-position.atom.ts";
import {useEffect, useState} from "react";

import ReactCodeMirror, {ViewUpdate} from "@uiw/react-codemirror";
import {isEmpty} from "lodash";
import {javascript} from "@codemirror/lang-javascript";
import {updateFragment} from "@database/api/fragment.api.ts";
import {IFragment} from "@database/database.types.ts";
import {vscodeDark} from "@uiw/codemirror-theme-vscode";


function EditorWorkspace() {
  const fragment = useAtomValue(fragmentAtom);
  const setEditorPosition = useSetAtom(editorPositionAtom);
  const [data, setData] = useState<IFragment>()
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (data?.id !== fragment?.id) {
      if (!isSaved && data?.id)
        updateFragment(data.id, data)

      setIsSaved(true)
      setData(fragment)
    }
  }, [data, fragment, isSaved])

  useEffect(() => {
    if (!isSaved && data) {
      const timeout = setTimeout(() => {
        updateFragment(data.id!, data);
        setIsSaved(true);
      }, 3000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [data, isSaved])

  function handleChange(value: string): void {
    setIsSaved(false);
    setData({...data!, code: value});
  }

  function handleUpdate(viewUpdate: ViewUpdate): void {
    const offset = viewUpdate.view.state.selection.main.head;
    const line = viewUpdate.state.doc.lineAt(offset);
    const position: IEditorPosition = {line: line.number, column: offset - line.from + 1};
    setEditorPosition(position);
  }

  return !isEmpty(data) && (
    <div id={"code-mirror"}>
      <ReactCodeMirror
        value={data?.code}
        basicSetup={{foldGutter: false, highlightActiveLineGutter: false, autocompletion: false}}
        className={"cm-container"}
        height={"100%"}
        theme={vscodeDark}
        extensions={[javascript({jsx: true})]}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />
    </div>
)

}

export default EditorWorkspace;
