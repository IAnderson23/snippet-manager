import {FormEvent} from "react";
import {startCase} from "lodash";
import {useSetAtom} from "jotai";

import FragmentForm from "./forms/fragment-form.component.tsx";
import {isFolder, isSnippet} from "@utils/type-guards.util.ts";
import SnippetForm from "./forms/snippet-form.component.tsx";
import {createFragment} from "@database/api/fragment.api.ts";
import FolderForm from "./forms/folder-form.component.tsx";
import {createSnippet} from "@database/api/snippet.api.ts";
import {createFolder} from "@database/api/folder.api.ts";
import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import Modal from "./modal.component.tsx";

interface IModalProps {
  target: ITarget;
}
function CreateModal({target}: IModalProps) {
  const setModal = useSetAtom(modalAtom);

  function onCancel() {
    setModal(undefined);
  }

  function onSubmit(event:FormEvent<HTMLFormElement>, item: ITarget["item"]) {
    event.preventDefault();

    if (isFolder(item))
      createFolder(item);
    else if (isSnippet(item))
      createSnippet(item);
    else
      createFragment(item)

    setModal(undefined);
  }

  function formSelector() {
    if (target.type === 'folder')
      return <FolderForm initialFolder={target.item} modalType={'create'} onSubmit={onSubmit} onCancel={onCancel}/>
    else if (target.type === 'snippet')
      return <SnippetForm initialSnippet={target.item} modalType={'create'} onSubmit={onSubmit} onCancel={onCancel}/>
    else
      return <FragmentForm initialFragment={target.item} modalType={'create'} onSubmit={onSubmit} onCancel={onCancel}/>
  }

  return (
    <Modal name={'Create ' + startCase(target.type)}>
      {formSelector()}
    </Modal>
  )
}

export default CreateModal;
