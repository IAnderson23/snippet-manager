import {useAtom} from "jotai";
import {sortConfigAtom} from "@atoms/sort-config.atom.ts";
import {ChangeEvent} from "react";
import {mdiChevronDown, mdiSortAscending, mdiSortDescending} from "@mdi/js";
import Icon from "@mdi/react";

function SortControls() {
  const [{sortBy, isAscending}, setSortConfig] = useAtom(sortConfigAtom);

  function handleClick() {
    setSortConfig({sortBy, isAscending: !isAscending});
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setSortConfig({sortBy: value, isAscending});
  }

  return (
    <div id={"controls"}>
      <button onClick={handleClick}><Icon path={isAscending ? mdiSortAscending : mdiSortDescending} size={1}/>
      </button>
      <div id={"select-container"}>
        <select defaultValue={"created"} onChange={handleChange}>
          <option value={"created"}>Created Date</option>
          <option value={"name"}>Name</option>
        </select>
        <Icon path={mdiChevronDown} size={1}/>
      </div>
    </div>
  )

}

export default SortControls;
