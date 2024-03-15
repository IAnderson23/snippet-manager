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

  return (
    <Menu menuLabel={label} alignment={'left'}>
      <MenuItem label={'Rename'} onClick={() => setModal(Modal.edit('folder', folder))}/>
      <MenuItem label={'Delete'} onClick={() => setModal(Modal.delete('folder', folder))}/>
    </Menu>
  )
}

export default FolderActions;
