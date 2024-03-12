import {useAtomValue, useSetAtom} from "jotai";
import {modalAtom} from "@atoms/model.atom.ts";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import Icon from "@mdi/react";
import {mdiDotsHorizontal} from "@mdi/js";
import {Menu, MenuItem} from "../../../../../components/dropdown-menu";
import Modal from "@utils/constructors/modal-constructor.util.ts";
import {Fragment} from "@utils/constructors/database-constructors.util.ts";


function EditorMenu() {
  const setModal = useSetAtom(modalAtom);
  const snippet = useAtomValue(snippetAtom);

  const label = <Icon className={'menu-icon'} path={mdiDotsHorizontal} size={1}/>;

  return (
    <div id={'editor-menu'}>
      <Menu menuLabel={label} alignment={'right'}>
        <MenuItem label={'Edit Snippet'} onClick={() => setModal(Modal.edit('snippet', snippet))}/>
        <MenuItem label={'Add Fragment'} onClick={() => setModal(Modal.create('fragment', Fragment.create(snippet.id!, snippet.fragments.length)))}/>
        <MenuItem label={'Delete Fragment'} onClick={() => setModal(Modal.delete('snippet', snippet))}/>
      </Menu>
    </div>
  )
}

export default EditorMenu;
