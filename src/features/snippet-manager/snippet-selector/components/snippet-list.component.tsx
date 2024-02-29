import useSort from "../hooks/use-sort.hook.ts";
import SnippetItem from "./snippet-item.component.tsx";

function SnippetList() {
  const snippets = useSort();

  return (
    <ul>
      {snippets.map((snippet, index) => {
        return <SnippetItem snippet={snippet} key={index}/>
      })}
    </ul>
  )
}

export default SnippetList;
