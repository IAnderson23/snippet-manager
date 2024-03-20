import {useAtomValue} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";
import CreateModal from "./create-modal.component.tsx";
import DeleteModal from "@features/snippet-manager/components/modal-controller/components/delete-modal.component.tsx";
import EditModal from "@features/snippet-manager/components/modal-controller/components/edit-modal.component.tsx";
import {ReactNode} from "react";

function ModalController(): ReactNode {
  const modal = useAtomValue(modalAtom);

  function modalSelector() {
    if (modal?.action === "create") return <CreateModal target={modal.target}/>
    else if (modal?.action === "edit") return <EditModal target={modal.target}/>
    else if (modal?.action === "delete") return <DeleteModal target={modal.target}/>
    else {
      console.error('Error: Invalid Modal Type');
      return null;
    }
  }

  return modal && (
    <div id={'modal-container'}>
      {modalSelector()}
    </div>
  )
}

export default ModalController;
