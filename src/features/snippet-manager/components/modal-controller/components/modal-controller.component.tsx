import {useAtomValue} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";

function ModalController() {
  const modal = useAtomValue(modalAtom);

  // function modalSelector() {
  //   if (modal?.type === "create") return <CreateModalController/>
  //   if (modal?.type === "edit") return <EditModalController/>
  //   if (modal?.type === "delete") return <DeleteModalController/>
  //   else {
  //     console.error('Error: Invalid Modal Type');
  //     return null;
  //   }
  // }

  return modal && (
    <div>
      {/*{modalSelector()}*/}
    </div>
  )
}

export default ModalController;
