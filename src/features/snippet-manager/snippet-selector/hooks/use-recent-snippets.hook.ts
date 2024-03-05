import {useAtom} from "jotai";

import {ISnippet} from "@features/database";
import {recentSnippetsAtom} from "@atoms/recent-snippets.atom.ts";

interface IRecentSnippet {
  recentSnippets: ISnippet[];
  updateRecentSnippets: (newSnippet: ISnippet) => void;
}

function useRecentSnippets():IRecentSnippet {
  const [recentSnippets, setRecentSnippets] = useAtom<ISnippet[]>(recentSnippetsAtom);

  function updateRecentSnippets (newSnippet: ISnippet): void {
    setRecentSnippets(previousList => {
      return [newSnippet, ...previousList.filter(snippet => snippet.id !== newSnippet.id)].slice(0,10);
    })
  }

  return {recentSnippets, updateRecentSnippets};
}

export default useRecentSnippets;
