import Icon from "@mdi/react";
import {useAtom} from "jotai";
import {ReactElement} from "react";
import {mdiTagOutline} from "@mdi/js";

import Filter from "@utils/constructors/filter-constructor.util.ts";
import FilterItem from "./filter-item.component.tsx";
import {filterAtom} from "@atoms/filter.atom.ts";

interface TagItemProps {
  tag: string
}

function TagItem({tag}: TagItemProps): ReactElement {
  const [filter, setFilter] = useAtom(filterAtom);

  function activeChecker() {
    return filter.type === "tag" && filter.target === tag ? "active" : "";
  }

  function handleClick() {
    setFilter(Filter.tag(tag))
  }

  const icon = <Icon className={'item-icon'} path={mdiTagOutline}/>

  return (
    <FilterItem name={tag} icon={icon} activeChecker={activeChecker} handleClick={handleClick}/>
  )
}

export default TagItem;
