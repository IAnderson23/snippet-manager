import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import {updateSnippet} from "@database/api/snippet.api.ts";
import {ISnippet} from "@database/database.types.ts";


function AddTag() {
  const snippet = useAtomValue(snippetAtom);
  const [newTag, setNewTag] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTag(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newSnippet: ISnippet = {...snippet, tags: [...snippet.tags, newTag]};
    updateSnippet(snippet.id!, newSnippet);
    setNewTag('')
  }

  return (
    <form onSubmit={handleSubmit} id={'add-tag'}>
      <input
        required={true}
        name={'tag'}
        type={'text'}
        placeholder={'Add Tag...'}
        value={newTag}
        onChange={handleChange}
        onBlur={() => setNewTag('')}
      />
    </form>
  )
}

export default AddTag;
