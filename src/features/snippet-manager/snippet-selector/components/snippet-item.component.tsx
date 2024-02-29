import {useAtom} from "jotai";
import {snippetIdAtom} from "@atoms/snippet-id.atom.ts";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import {useAllFolders} from "@features/snippet-manager";
import useRecentSnippets from "../hooks/use-recent-snippets.hook.ts";
import {ISnippet} from "../../../../database/database.types.ts";
import {ReactElement} from "react";
dayjs.extend(relativeTime);

interface ISnippetItemProps {
  snippet: ISnippet;
}

function SnippetItem({snippet}: ISnippetItemProps): ReactElement {
  const [snippetId, setSnippetId] = useAtom(snippetIdAtom);
  const allFolders = useAllFolders();
  const {updateRecentSnippets} = useRecentSnippets();

  function getFolderName(folderId: number) {
    const folder = allFolders.find(folder => folder.id === folderId);
    return folder?.name ?? 'Uncategorized';
  }

  function isActive(target: number): string {
    return snippetId === target ? 'active' : '';
  }

  function handleClick(snippet: ISnippet): void {
    updateRecentSnippets(snippet);
    setSnippetId(snippet.id!);
  }

  return (
    <li key={snippet.id} className={"snippet-item " + isActive(snippet.id!)} onClick={() => handleClick(snippet)}>
      <div className={"item-content"}>
        <h4 className={"snippet-name"}>{snippet.name}</h4>
        <h5 className={"folder-name"}>{getFolderName(snippet.folderId)}</h5>
        <h5 className={"created-date"}>{dayjs(snippet.created).fromNow()}</h5>
      </div>
    </li>
  )

}

export default SnippetItem;
