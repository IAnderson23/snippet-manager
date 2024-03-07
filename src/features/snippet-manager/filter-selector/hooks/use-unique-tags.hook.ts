import {useAtomValue} from "jotai";
import {allSnippetsAtom} from "@atoms/all-snippets.atom.ts";
import {useEffect, useState} from "react";


function useUniqueTags() {
  const snippets = useAtomValue(allSnippetsAtom);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    const tags: string[] = snippets.map(snippet => snippet.tags).flat();
    const uniques = tags.filter((tag, index, array) => array.indexOf(tag) ===  index);
    setUniqueTags(uniques);

  }, [snippets]);

  return uniqueTags;
}

export default useUniqueTags;
