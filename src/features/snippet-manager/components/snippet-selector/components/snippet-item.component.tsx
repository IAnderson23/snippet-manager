import dayjs from 'dayjs';
import {useAtom, useAtomValue} from "jotai";
import {ReactElement, useEffect, useMemo, useState} from "react";
import relativeTime from 'dayjs/plugin/relativeTime'

import useRecentSnippets from "../hooks/use-recent-snippets.hook.ts";

import {snippetAtom} from "@atoms/snippet.atom.ts";


import {isEqual} from "lodash";
import useSnippet from "../hooks/use-snippet.hook.ts";
import {ISnippet} from "@database/database.types.ts";
import {allFoldersAtom} from "@atoms/all-folders.atom.ts";

dayjs.extend(relativeTime);

interface ISnippetItemProps {
  itemId: number;
}

function SnippetItem({itemId}: ISnippetItemProps): ReactElement {
  const allFolders = useAtomValue(allFoldersAtom);
  const {updateRecentSnippets} = useRecentSnippets();
  const item = useSnippet(itemId) as ISnippet;
  const [snippet, setSnippet] = useAtom(snippetAtom);
  const [isCurrent, setIsCurrent] = useState<boolean>(false);

  useEffect(() => {
    if (isCurrent && !isEqual(snippet, item))
      setSnippet(item)
  }, [isCurrent, item, setSnippet, snippet]);


  function getFolderName(folderId: number) {
    const folder = allFolders.find(folder => folder.id === folderId);
    return folder?.name ?? 'Uncategorized';
  }

  const isActive = useMemo((): string => {
    if (snippet.id === itemId) {
      setIsCurrent(true)
      return 'active';
    } else {
      setIsCurrent(false);
      return '';
    }
  }, [itemId, snippet.id])

  function handleClick(snippet: ISnippet): void {
    updateRecentSnippets(snippet);
    setSnippet(snippet);
  }

  return (
    <li key={item.id} className={"snippet-item " + isActive} onClick={() => handleClick(item)}>
      <div className={"item-content"}>
        <h4 className={"item-name"}>{item.name}</h4>
        <h5 className={"folder-name"}>{getFolderName(item.folderId)}</h5>
        <h5 className={"created-date"}>{dayjs(item.created).fromNow()}</h5>
      </div>
    </li>
  )
}

export default SnippetItem;
