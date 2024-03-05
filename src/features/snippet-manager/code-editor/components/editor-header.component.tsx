import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import EditorMenu from "./editor-menu.component.tsx";
import TagList from "./tag-list.component.tsx";
import AddTag from "./add-tag.component.tsx";

function EditorHeader() {
  const snippet = useAtomValue(snippetAtom);

  return (
    <div id={'editor-header'}>
      <h2>{snippet.name}</h2>
      <EditorMenu/>
      <div id={'tags-container'}>
        <TagList/>
        <AddTag/>
      </div>
    </div>
  )
}

export default EditorHeader;
