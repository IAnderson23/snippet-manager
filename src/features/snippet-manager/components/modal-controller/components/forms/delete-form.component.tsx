
import {ReactElement} from "react";
import {useAtom, useSetAtom} from "jotai";
import {ITarget, modalAtom} from "@atoms/modal.atom.ts";
import {IFolder, IFragment, ISnippet} from "@database/database.types.ts";
import {deleteFolder} from "@database/api/folder.api.ts";
import {filterAtom} from "@atoms/filter.atom.ts";
import Filter from "@utils/constructors/filter-constructor.util.ts";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import {deleteSnippet} from "@database/api/snippet.api.ts";
import {deleteFragment} from "@database/api/fragment.api.ts";
import {Snippet} from "@utils/constructors/database-constructors.util.ts";


interface DeleteFormProps {
  target: ITarget
}

function DeleteForm({target}: DeleteFormProps): ReactElement {
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
    <div className={'modal'}>
      <form>
        <h3>Are you sure you wanted to permanently delete {target.item.name}</h3>
        <button className={'submit'} type={"button"} onClick={onDelete}>Delete</button>
        <button className={'cancel'} type={"button"} onClick={onCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default DeleteForm;
