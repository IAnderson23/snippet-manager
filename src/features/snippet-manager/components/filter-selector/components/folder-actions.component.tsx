import {IFolder} from "@database/database.types.ts";
import {ReactElement} from "react";
import {useSetAtom} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";
import Icon from "@mdi/react";
import {mdiDotsHorizontal} from "@mdi/js";
import {Menu, MenuItem} from "../../../../../components/dropdown-menu";
import Modal from "@utils/constructors/modal-constructor.util.ts";

interface IFolderActionsProps {
  folder: IFolder;
}

function FolderActions({folder}: IFolderActionsProps): ReactElement {
  const setModal = useSetAtom(modalAtom);

  const label = <Icon className={'dropdown-menu-icon'} path={mdiDotsHorizontal} size={1}/>

  function onRename() {
    const modal = Modal.create('edit', folder);
    setModal(modal);
  }

  function onDelete() {
    const modal = Modal.create('delete', folder);
    setModal(modal);
  }

  return (
    <Menu menuLabel={label} alignment={'left'}>
      <MenuItem label={'Rename'} onClick={onRename}/>
      <MenuItem label={'Delete'} onClick={onDelete}/>
    </Menu>
  )
}

export default FolderActions;
