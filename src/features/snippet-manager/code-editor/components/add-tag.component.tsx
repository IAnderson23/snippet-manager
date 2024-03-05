import {useAtomValue} from "jotai";
import {snippetAtom} from "@atoms/snippet.atom.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import {ISnippet, updateSnippet} from "@features/database";

function AddTag() {
  const snippet = useAtomValue(snippetAtom);
  const [newTag, setNewTag] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTag(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (snippet) {
      const newSnippet: ISnippet = {...snippet, tags: [...snippet.tags, newTag]};
      updateSnippet(snippet.id!, newSnippet);
    }
    setNewTag('')
  }

  return (
    <form onSubmit={handleSubmit}>
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
