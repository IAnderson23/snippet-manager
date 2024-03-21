import {ReactElement} from "react";
import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";
import FilterList from "./filter-list.component.tsx";
import useAllFolders from "../hooks/use-all-folders.hook.ts";
import FolderItem from "./folder-item.component.tsx";
import {useSetAtom} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {Folder} from "@utils/constructors/database-constructors.util.ts";

function FolderList(): ReactElement {
  const setModal = useSetAtom(modalAtom);
  const allFolders = useAllFolders();

  function onAdd() {
    setModal(Modal.create('create', Folder.default()))
  }

  const header = (
    <button onClick={onAdd}>
      <Icon path={mdiPlus} size={1}/>
    </button>
  )

  return (
    <div>
      <FilterList header={header} name={'Folders'}>
        {allFolders.map((folder, index) => <FolderItem key={index} folder={folder}/>)}
      </FilterList>
    </div>
  )
}

export default FolderList;
