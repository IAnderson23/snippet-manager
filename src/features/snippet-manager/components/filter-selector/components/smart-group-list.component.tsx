import FilterList from "./filter-list.component.tsx";
import SmartGroupItem from "./smart-group-item.component.tsx";

function SmartGroupList() {
  return (
    <FilterList name={'Smart Groups'}>
      <SmartGroupItem/>
    </FilterList>
  )
}

export default SmartGroupList;
