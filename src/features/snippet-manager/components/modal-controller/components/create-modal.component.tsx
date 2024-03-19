import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import {useSetAtom} from "jotai";
import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";
import Modal from "./modal.component.tsx";
import {FormEvent} from "react";
import {createFolder} from "@database/api/folder.api.ts";
import {createSnippet} from "@database/api/snippet.api.ts";
import {createFragment} from "@database/api/fragment.api.ts";

interface IModalProps {
  target: ITarget;
}
function CreateModal({target}: IModalProps) {
  const setModal = useSetAtom(modalAtom);

  function resetModal() {
    setModal(undefined);
  }

  function submitHandler(e: FormEvent<HTMLFormElement>, target: ITarget) {
    e.preventDefault()

    if (target.type === 'folder')
      createFolder(target.item);
    else if (target.type === 'snippet')
      createSnippet(target.item);
    else
      createFragment(target.item).then(response => console.log(response))

    setModal(undefined);
  }

  function modalSelector() {
    if (target.type === 'folder') return <CreateFolderModal folder={target.item} resetModal={resetModal}/>
    else if (target.type === 'snippet') return <CreateSnippetModal snippet={target.item} resetModal={resetModal}/>
    else return <CreateFragmentModal fragment={target.item} resetModal={resetModal}/>
  }

  return (
    <>
      {modalSelector()}
    </>
  )
}

interface ICreateModalProps {
  resetModal: () => void;
}

function CreateFolderModal({folder, resetModal}: {folder: IFolder} & ICreateModalProps) {

  return (
    <Modal name={'Create Folder'}>

    </Modal>
  )
}

function CreateSnippetModal({snippet, resetModal}: {snippet: ISnippet} & ICreateModalProps) {

  return (
    <Modal name={'Create Snippet'}>

    </Modal>
  )
}

function CreateFragmentModal({fragment, resetModal}: {fragment: IFragment} & ICreateModalProps) {

  return (
    <Modal name={'Create Fragment'}>

    </Modal>
  )
}

export default CreateModal;
