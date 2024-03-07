import FolderList from "./folder-list.component.tsx";
import SmartGroupList from "./smart-group-list.component.tsx";
import TagList from "./tag-list.component.tsx";

function FilterSelector() {
  return (
    <div id={'filter-selector'}>
      <SmartGroupList/>
      <FolderList/>
      <TagList/>
    </div>
  )
}

export default FilterSelector;
