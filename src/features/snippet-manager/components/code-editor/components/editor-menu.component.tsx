import {useSetAtom} from "jotai";
import {modalAtom} from "@atoms/modal.atom.ts";
import Icon from "@mdi/react";
import {mdiDotsHorizontal} from "@mdi/js";
import {Menu, MenuItem} from "../../../../../components/dropdown-menu";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {ISnippet} from "@database/database.types.ts";
import {ReactElement} from "react";

interface IMenuProps {
  snippet: ISnippet;
}

function EditorMenu({snippet}: IMenuProps): ReactElement {
  const setModal = useSetAtom(modalAtom);

  const label = <Icon className={'menu-icon'} path={mdiDotsHorizontal} size={1}/>;

  function onEditSnippet() {
    const modal = Modal.create('edit', snippet)
    setModal(modal);
  }

  function onDeleteSnippet() {
    const modal = Modal.create('delete', snippet);
    setModal(modal);
  }

  return (
    <div id={'editor-menu'}>
      <Menu menuLabel={label} alignment={'right'}>
        <MenuItem label={'Edit Snippet'} onClick={onEditSnippet}/>
        <MenuItem label={'Delete Snippet'} onClick={onDeleteSnippet}/>
      </Menu>
    </div>
  )
}

export default EditorMenu;
