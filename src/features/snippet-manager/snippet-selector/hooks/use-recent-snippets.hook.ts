import {ISnippet} from "@features/database/types/database.types.ts";
import {useState} from "react";

interface IRecentSnippet {
  recentSnippets: ISnippet[];
  updateRecentSnippets: (newSnippet: ISnippet) => void;
}

function useRecentSnippets():IRecentSnippet {
  const [recentSnippets, setRecentSnippets] = useState<ISnippet[]>([]);

  function updateRecentSnippets (newSnippet: ISnippet): void {
    setRecentSnippets(previousList => {
      return [newSnippet, ...previousList.filter(snippet => snippet.id !== newSnippet.id)].slice(0,10);
    })
  }

  return {recentSnippets, updateRecentSnippets};
}

export default useRecentSnippets;
