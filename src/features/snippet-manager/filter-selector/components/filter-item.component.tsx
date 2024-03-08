import {ReactElement} from "react";


interface FilterItemProps {
  name: string;
  icon: ReactElement;
  isActive: () => string;
  handleClick: () => void;
  children?: ReactElement;
}

function FilterItem({name, icon, isActive, handleClick, children}: FilterItemProps): ReactElement {
  return (
    <li className={"filter-item " + isActive()}>
      <div className={"item-header"} onClick={() => handleClick()}>
        {icon}
        <p className={"item-name"}>{name}</p>
      </div>
      {children}
    </li>
  )
}

export default FilterItem;
