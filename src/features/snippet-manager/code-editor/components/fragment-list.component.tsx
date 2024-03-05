import useSnippetFragments from "../hooks/use-snippet-fragments.hook.ts";
import FragmentItem from "@features/snippet-manager/code-editor/components/fragment-item.component.tsx";
import useFirstFragment from "@features/snippet-manager/code-editor/hooks/use-first-fragment.hook.ts";

function FragmentList() {
  const fragments = useSnippetFragments();
  useFirstFragment()

  return fragments && (
    <div id={'fragment-list-container'}>
      <ul id={'fragment-list'}>
        {fragments.map((fragment, index) => <FragmentItem key={index} item={fragment}/>)}
      </ul>
    </div>
  )


}

export default FragmentList;
