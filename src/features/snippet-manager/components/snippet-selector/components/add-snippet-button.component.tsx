import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";
import {useSetAtom} from "jotai";

import {Snippet} from "@utils/constructors/database-constructors.util.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {modalAtom} from "@atoms/model.atom.ts";

function AddSnippetButton() {
  const setModal = useSetAtom(modalAtom);

  function handleClick(): void {
    setModal(Modal.create('snippet', Snippet.create()));
  }

  return (
    <button id={'add-snippet-button'} onClick={handleClick}>
      <Icon path={mdiPlus} size={1}/>
    </button>
  )
}

export default AddSnippetButton;
