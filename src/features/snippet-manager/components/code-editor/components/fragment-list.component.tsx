import useSnippetFragments from "../hooks/use-snippet-fragments.hook.ts";
import FragmentItem from "./fragment-item.component.tsx";
import useFirstFragment from "../hooks/use-first-fragment.hook.ts";
import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";
import {Fragment} from "@utils/constructors/database-constructors.util.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {ISnippet} from "@database/database.types.ts";
import {useSetAtom} from "jotai/index";
import {modalAtom} from "@atoms/modal.atom.ts";

interface IListProps{
  snippet: ISnippet
}

function FragmentList({snippet}: IListProps) {
  const setModal = useSetAtom(modalAtom);
  const fragments = useSnippetFragments();
  useFirstFragment(fragments)

  function onAddFragment() {
    const fragment = Fragment.create(snippet.id!, snippet.fragments.length);
    const modal = Modal.create('create', fragment);
    setModal(modal);
  }

  return fragments && (
    <div id={'fragment-list-container'}>
      <ul id={'fragment-list'}>
        {fragments.map((fragment, index) => <FragmentItem key={index} item={fragment}/>)}
      </ul>
      {fragments.length < 4 && (
        <button id={'add-fragment'} onClick={onAddFragment}><Icon path={mdiPlus} size={1}/></button>
      )}
    </div>
  )
}

export default FragmentList;
