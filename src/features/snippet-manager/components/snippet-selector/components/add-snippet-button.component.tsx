import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";
import {useSetAtom} from "jotai";

import {Snippet} from "@utils/constructors/database-constructors.util.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {modalAtom} from "@atoms/modal.atom.ts";

function AddSnippetButton() {
  const setModal = useSetAtom(modalAtom);

  function onClick(): void {
    const modal = Modal.create('create', Snippet.default());
    setModal(modal);
  }

  return (
    <button id={'add-snippet-button'} onClick={onClick}>
      <Icon path={mdiPlus} size={1}/>
    </button>
  )
}

export default AddSnippetButton;
