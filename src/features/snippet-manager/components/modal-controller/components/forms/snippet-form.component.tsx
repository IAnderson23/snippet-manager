import {ISnippet} from "@database/database.types.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import useFolderOptionList from "../../hooks/folder-option-list.hook.tsx";

interface ISnippetFormProps {
  initialSnippet: ISnippet;
  modalType: 'Create' | 'Edit';
  onSubmit: (event: FormEvent<HTMLFormElement>, snippet: ISnippet) => void;
  onCancel: () => void;
}

function SnippetForm({initialSnippet, modalType, onSubmit, onCancel}: ISnippetFormProps) {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const folderOptionList = useFolderOptionList();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newSnippet = {...snippet, [event.target.name]: event.target.value};
    setSnippet(newSnippet);
  }

  return (
    <form onSubmit={e => onSubmit(e, snippet)}>
      <label>
        Name
        <input
          name={"name"}
          value={snippet.name}
          pattern={".{2,}"}
          required={true}
          autoFocus={true}
          onChange={onChange}
        />
      </label>

      <label>
        Folder
        <select defaultValue={snippet.folderId}>
          <option value={0}>Uncategorized</option>
          {folderOptionList}
        </select>
      </label>

      <label>
        Tags
        <input name={"tags"} placeholder={"Optional"} onChange={onChange}/>
      </label>

      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default SnippetForm;
