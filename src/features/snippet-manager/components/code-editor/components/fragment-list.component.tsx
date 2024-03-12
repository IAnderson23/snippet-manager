import useSnippetFragments from "../hooks/use-snippet-fragments.hook.ts";
import FragmentItem from "./fragment-item.component.tsx";
import useFirstFragment from "../hooks/use-first-fragment.hook.ts";

function FragmentList() {
  const fragments = useSnippetFragments();
  useFirstFragment(fragments)

  return fragments && (
    <div id={'fragment-list-container'}>
      <ul id={'fragment-list'}>
        {fragments.map((fragment, index) => <FragmentItem key={index} item={fragment}/>)}
      </ul>
    </div>
  )


}

export default FragmentList;
