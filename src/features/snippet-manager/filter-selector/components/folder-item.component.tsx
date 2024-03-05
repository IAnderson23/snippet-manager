import {useAtom} from "jotai";
import Icon from "@mdi/react";
import {ReactElement} from "react";
import {mdiFolderOpenOutline, mdiFolderOutline} from "@mdi/js";

import Filter from "@utils/constructors/filter-constructor.util.ts";
import FilterItem from "../components/filter-item.component.tsx";
import {IFolder} from "@features/database/types/database.types.ts";
import FolderActions from "./folder-actions.component.tsx";
import {filterAtom} from "@atoms/filter.atom.ts";

interface IFolderItemProps {
  folder: IFolder;
}

function FolderItem({folder}: IFolderItemProps): ReactElement {
  const [filter, setFilter] = useAtom(filterAtom);

  function isActive(): string {
    return filter.type === 'folder' && filter.target == folder.id! ? 'active' : '';
  }

  function handleClick(): void {
    setFilter(Filter.folder(folder.id!))
  }

  const icon: ReactElement = (
    <Icon className={'item-icon'} path={isActive() ? mdiFolderOpenOutline : mdiFolderOutline}/>
  )

  return (
    <FilterItem key={folder.id} name={folder.name} icon={icon} isActive={isActive} handleClick={handleClick}>
      <FolderActions folder={folder}/>
    </FilterItem>
  )
}

export default FolderItem;
