import {ReactElement} from "react";
import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";
import FilterList from "./filter-list.component.tsx";
import useAllFolder from "@features/snippet-manager/filter-selector/hooks/use-all-folder.hook.ts";
import FolderItem from "../components/folder-item.component.tsx";
import {useSetAtom} from "jotai";
import {modalAtom} from "@atoms/model-atom.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {Folder} from "@utils/constructors/database-constructors.util.ts";

function FolderList(): ReactElement {
  const setModal = useSetAtom(modalAtom);
  const allFolders = useAllFolder();

  function HandleAdd() {
    setModal(Modal.create('folder', Folder.create()))
  }

  const header = (
    <button onClick={HandleAdd}>
      <Icon path={mdiPlus} size={1}/>
    </button>
  )

  return (
    <div>
      <FilterList header={header} name={'Folder'}>
        {allFolders.map((folder, index) => <FolderItem key={index} folder={folder}/>)}
      </FilterList>
    </div>
  )
}

export default FolderList;
