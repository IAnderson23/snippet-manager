import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import {isEmpty} from "lodash";

function TagList() {
  const snippet = useAtomValue(snippetAtom);

  return !isEmpty(snippet?.tags) && (
    <div id={'tag-list-container'}>
      <ul id={'tag-list'}>
        {snippet?.tags.map((tag, index) => <li className={'tag-item'} key={index}>{tag}</li>)}
      </ul>
    </div>
  )
}

export default TagList;
