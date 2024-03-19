import EditorMenu from "./editor-menu.component.tsx";
import TagList from "./tag-list.component.tsx";
import AddTag from "./add-tag.component.tsx";
import {ReactElement} from "react";
import {ISnippet} from "@database/database.types.ts";

interface IHeaderProps {
  snippet: ISnippet
}

function EditorHeader({snippet}: IHeaderProps): ReactElement {

  return (
    <div id={'editor-header'}>
      <h2 id={'snippet-name'}>{snippet.name}</h2>
      <EditorMenu snippet={snippet}/>
      <div id={'tags-container'}>
        <TagList/>
        <AddTag/>
      </div>
    </div>
  )
}

export default EditorHeader;
