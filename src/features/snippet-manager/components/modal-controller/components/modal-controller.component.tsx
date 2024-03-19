import {useAtomValue} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";
import CreateModal from "./create-modal.component.tsx";

function ModalController() {
  const modal = useAtomValue(modalAtom);

  function modalSelector() {
    if (modal?.action === "create") return <CreateModal target={modal.target}/>
    // if (modal?.type === "edit") return <EditModalController/>
    // if (modal?.type === "delete") return <DeleteModalController/>
    else {
      console.error('Error: Invalid Modal Type');
      return null;
    }
  }

  return modal && (
    <div>
      {modalSelector()}
    </div>
  )
}

export default ModalController;
