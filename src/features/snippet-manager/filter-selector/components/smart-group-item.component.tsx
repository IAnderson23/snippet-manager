import FilterItem from "./filter-item.component.tsx";
import Icon from "@mdi/react";
import {mdiArchiveOutline, mdiHelpCircleOutline, mdiHistory} from "@mdi/js";
import {useAtom} from "jotai";
import {filterAtom} from "@atoms/filter.atom.ts";
import Filter from "@utils/constructors/filter-constructor.util.ts";


function SmartGroupItem() {
  const [filter, setFilter] = useAtom(filterAtom);

  function activeChecker(target: string) {
    return filter.type === "smartGroup" && filter.target === target ? "active" : "";
  }

  function handleClick(target: string) {
    setFilter(Filter.smartGroup(target));
  }

  const allSnippetIcon = <Icon className={'item-icon'} path={mdiArchiveOutline}/>
  const uncategorizedIcon = <Icon className={'item-icon'} path={mdiHelpCircleOutline}/>
  const recentSnippetIcon = <Icon className={'item-icon'} path={mdiHistory}/>

  return (
    <>
      <FilterItem
        name={'All Snippet'}
        icon={allSnippetIcon}
        activeChecker={() => activeChecker('all')}
        handleClick={()=> handleClick('all')}
      />
      <FilterItem
        name={'Uncategorized'}
        icon={uncategorizedIcon}
        activeChecker={() => activeChecker('uncategorized')}
        handleClick={()=> handleClick('uncategorized')}
      />
      <FilterItem
        name={'Recent'}
        icon={recentSnippetIcon}
        activeChecker={() => activeChecker('recent')}
        handleClick={()=> handleClick('recent')}
      />
    </>
  )
}

export default SmartGroupItem;
