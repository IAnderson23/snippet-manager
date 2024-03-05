import {useAtomValue} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {editorPositionAtom} from "@atoms/editor-position.atom.ts";

function EditorFooter() {
  const fragment = useAtomValue(fragmentAtom);
  const position = useAtomValue(editorPositionAtom);

  return (
    <div id={"editor-footer"}>
      <p id={"left-footer"} className={"footer"}>{fragment?.language}</p>
      <p id={"right-footer"} className={"footer"}>Line {position.line || 0},
        Column {position.column || 0}</p>
    </div>
  )
}

export default EditorFooter;
