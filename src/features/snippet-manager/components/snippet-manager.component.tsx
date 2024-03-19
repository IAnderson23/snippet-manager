import {SnippetSelector} from "./snippet-selector";
import {FilterSelector} from "./filter-selector";
import {CodeEditor} from "./code-editor";
import {ModalController} from "./modal-controller";


function SnippetManager() {
  return (
    <div id={'snippet-manager'}>
      <FilterSelector/>
      <SnippetSelector/>
      <CodeEditor/>
      <ModalController/>
    </div>
  )
}

export default SnippetManager
