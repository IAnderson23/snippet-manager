import {ChangeEvent, FormEvent, useState} from "react";
import {IFragment} from "@database/database.types.ts";
import {supportedLanguages} from "../../utils/supported-languages.util.ts";

interface IFragmentFormProps {
  initialFragment: IFragment;
  modalType: 'Create' | 'Edit';
  onSubmit: (event: FormEvent<HTMLFormElement>, folder: IFragment) => void;
  onCancel: () => void;
}

function FragmentForm({initialFragment, modalType, onSubmit, onCancel}: IFragmentFormProps) {
  const [fragment, setFragment] = useState<IFragment>(initialFragment);

  const languageOptionList = supportedLanguages.map((option, i) => {
    return <option value={option.lang} key={i}>{option.name}</option>
  })

  function onChange(event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const newFragment: IFragment = {...fragment, [event.target.name]: event.target.value};
    setFragment(newFragment);
  }

  return (
    <form onSubmit={e => onSubmit(e, fragment)}>
      <label>
        Name
        <input
          id={'fragment-name'}
          name={"name"}
          value={fragment.name}
          pattern={".{2,}"}
          required={true}
          autoFocus={true}
          onChange={onChange}
        />
      </label>

      <label>
        Language
        <select id={'fragment-language'} name={"language"} defaultValue={fragment.language} onChange={onChange} required={true}>
          <option value={''} disabled={true}/>
          {languageOptionList}
        </select>
      </label>

      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default FragmentForm;
