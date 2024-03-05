import {useAllSnippets} from "@features/snippet-manager";


function useSnippet(snippetId: number) {
  const snippets = useAllSnippets();

  return snippets.find(snippet => snippet.id === snippetId);
}

export default useSnippet;
