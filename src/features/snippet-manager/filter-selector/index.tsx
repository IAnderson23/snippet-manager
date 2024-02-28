import FolderList from "./components/folder-list.component.tsx";
import SmartGroupList from "./components/smart-group-list.component.tsx";

function FilterSelector() {
  return (
    <div id={'filter-selector'}>
      <h1>Filter Selector</h1>
      <SmartGroupList/>
      <FolderList/>
    </div>
  )
}

export default FilterSelector;
