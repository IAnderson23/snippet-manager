import {IFolder} from "@database/database.types.ts";
import {ChangeEvent, FormEvent, ReactElement, useState} from "react";

interface IFolderFormProps {
  initialFolder: IFolder;
  modalType: 'create' | 'edit';
  onSubmit: (event: FormEvent<HTMLFormElement>, folder: IFolder) => void;
  onCancel: () => void;
}

function FolderForm({initialFolder, modalType, onSubmit, onCancel}: IFolderFormProps): ReactElement {
  const [folder, setFolder] = useState<IFolder>(initialFolder);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newFolder = {...folder, [event.target.name]: event.target.value};
    setFolder(newFolder);
  }

  return (
    <form onSubmit={event => onSubmit(event, folder)}>
      <label htmlFor={'folder-name'}>Name</label>
      <input
        id={'folder-name'}
        name={"name"}
        value={folder.name}
        pattern={".{2,}"}
        required={true}
        autoFocus={true}
        onChange={onChange}
      />
      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default FolderForm;
