import {ReactElement} from "react";
import {useAtom, useSetAtom} from "jotai";

import {Snippet} from "@utils/constructors/database-constructors.util.ts";
import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";
import Filter from "@utils/constructors/filter-constructor.util.ts";
import {deleteFragment} from "@database/api/fragment.api.ts";
import {deleteSnippet} from "@database/api/snippet.api.ts";
import {deleteFolder} from "@database/api/folder.api.ts";
import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import {filterAtom} from "@atoms/filter.atom.ts";
import Modal from "./modal.component.tsx";
import {startCase} from "lodash";

interface DeleteFormProps {
  target: ITarget
}

function DeleteModal({target}: DeleteFormProps): ReactElement {
  const setModal = useSetAtom(modalAtom);
  const setSnippet = useSetAtom(snippetAtom);
  const [filter, setFilter] = useAtom(filterAtom);

  function onDelete() {
    if (target.type === 'folder')
      handleFolder(target.item)
    else if (target.type === 'snippet')
      handleSnippet(target.item);
    else if (target.type === 'fragment')
      handleFragment(target.item);

    setModal(undefined)
  }

  function handleFolder(folder: IFolder) {
      deleteFolder(folder.id!);
      if (filter.target === folder.id!)
        setFilter(Filter.default());
  }

  function handleSnippet(snippet: ISnippet) {
    deleteSnippet(snippet.id!);
    setSnippet(Snippet.default());
  }

  function handleFragment(fragment: IFragment) {
    deleteFragment(fragment.id!);
  }

  function onCancel() {
    setModal(undefined);
  }

  return (
    <Modal name={'Delete' + startCase(target.type)}>
      <form>
        <h3>Are you sure you wanted to permanently delete {target.item.name}</h3>
        <button className={'submit'} type={"button"} onClick={onDelete}>Delete</button>
        <button className={'cancel'} type={"button"} onClick={onCancel}>Cancel</button>
      </form>
    </Modal>
  )
}

export default DeleteModal;
