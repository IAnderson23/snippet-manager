import {SnippetSelector} from "./snippet-selector";
import {FilterSelector} from "./filter-selector";
import {CodeEditor} from "./code-editor";


function SnippetManager() {
  return (
    <div id={'snippet-manager'}>
      <FilterSelector/>
      <SnippetSelector/>
      <CodeEditor/>
    </div>
  )
}

export default SnippetManager
