
import {ReactElement} from "react";
import {useSetAtom} from "jotai";
import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";


interface DeleteFormProps {
  target: ITarget
}

function DeleteForm({target}: DeleteFormProps): ReactElement {
  const setModal = useSetAtom(modalAtom);

  // function handleDelete() {
  //   if (target.type === 'folder')
  //
  // }
  //
  // function handleFolder(target : IFolder) {
  //
  // }

  function handleCancel() {
    setModal(Modal.default);
  }

  return (
    <div className={'modal'}>
      <form>
        <h3>Are you sure you wanted to permanently delete {target.name}</h3>
        <button className={'submit'} type={"button"}>Delete</button>
        <button className={'cancel'} type={"button"} onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default DeleteForm;
