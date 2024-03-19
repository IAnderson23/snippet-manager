import {ChangeEvent, FormEvent, useState} from "react";
import {IFragment} from "@database/database.types.ts";
import {
  supportedLanguages
} from "@features/snippet-manager/components/modal-controller/utils/supported-languages.util.ts";
import {startCase} from "lodash";

interface IFragmentFormProps {
  initialFragment: IFragment;
  modalType: 'create' | 'edit';
  onSubmit: (event: FormEvent<HTMLFormElement>, folder: IFragment) => void;
  onCancel: () => void;
}

function FragmentForm({initialFragment, modalType, onSubmit, onCancel}: IFragmentFormProps) {
  const [fragment, setFragment] = useState<IFragment>(initialFragment);

  const languageOptionList = supportedLanguages.map((language, i) => {
    return <option value={language} key={i}>{startCase(language)}</option>
  })

  function onChange(event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const newFragment: IFragment = {...fragment, [event.target.name]: event.target.value};
    setFragment(newFragment);
  }

  return (
    <form onSubmit={e => onSubmit(e, fragment)}>
      <label htmlFor={'fragment-name'}>Name</label>
      <input
        id={'fragment-name'}
        name={"name"}
        value={fragment.name}
        pattern={".{2,}"}
        required={true}
        autoFocus={true}
        onChange={onChange}
      />

      <label htmlFor={'fragment-language'}>Language</label>
      <select id={'fragment-language'} name={"language"} defaultValue={fragment.language} onChange={onChange}>
        {languageOptionList}
      </select>

      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default FragmentForm;
