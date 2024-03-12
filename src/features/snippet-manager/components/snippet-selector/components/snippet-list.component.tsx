import useSort from "../hooks/use-sort.hook.ts";
import SnippetItem from "./snippet-item.component.tsx";
import {useAutoAnimate} from "@formkit/auto-animate/react";

function SnippetList() {
  const snippets = useSort();
  const [parent] = useAutoAnimate();

  return (
    <ul id={'snippet-list'} ref={parent}>
      {snippets.map((snippet) => {
        return <SnippetItem itemId={snippet.id!} key={snippet.id}/>
      })}
    </ul>
  )
}

export default SnippetList;
