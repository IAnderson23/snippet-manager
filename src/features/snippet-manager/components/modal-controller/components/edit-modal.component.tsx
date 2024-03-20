import {useSetAtom} from "jotai";
import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import {FormEvent} from "react";
import {isFolder, isSnippet} from "@utils/type-guards.util.ts";
import {updateFolder} from "@database/api/folder.api.ts";
import {updateSnippet} from "@database/api/snippet.api.ts";
import {updateFragment} from "@database/api/fragment.api.ts";
import FolderForm
  from "@features/snippet-manager/components/modal-controller/components/forms/folder-form.component.tsx";
import SnippetForm
  from "@features/snippet-manager/components/modal-controller/components/forms/snippet-form.component.tsx";
import FragmentForm
  from "@features/snippet-manager/components/modal-controller/components/forms/fragment-form.component.tsx";
import Modal from "@features/snippet-manager/components/modal-controller/components/modal.component.tsx";
import {startCase} from "lodash";

interface IModalProps {
  target: ITarget;
}

function EditModal({target}: IModalProps) {
  const setModal = useSetAtom(modalAtom);

  function onCancel() {
    setModal(undefined);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>, item: ITarget["item"]) {
    event.preventDefault();

    if (isFolder(item))
      updateFolder(item.id!, item);
    else if (isSnippet(item))
      updateSnippet(item.id!, item);
    else
      updateFragment(item.id!, item);

    setModal(undefined);
  }

  function formSelector() {
    if (target.type === 'folder')
      return <FolderForm initialFolder={target.item} modalType={'Edit'} onSubmit={onSubmit} onCancel={onCancel}/>
    else if (target.type === 'snippet')
      return <SnippetForm initialSnippet={target.item} modalType={'Edit'} onSubmit={onSubmit} onCancel={onCancel}/>
    else
      return <FragmentForm initialFragment={target.item} modalType={'Edit'} onSubmit={onSubmit} onCancel={onCancel}/>
  }

  return (
    <Modal name={'Edit ' + startCase(target.type)}>
      {formSelector()}
    </Modal>
  )
}

export default EditModal;
