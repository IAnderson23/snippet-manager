import {ReactElement} from "react";


interface FilterItemProps {
  name: string;
  icon: ReactElement;
  activeChecker: () => string;
  handleClick: () => void;
  children?: ReactElement;
}

function FilterItem({name, icon, activeChecker, handleClick, children}: FilterItemProps): ReactElement {
  return (
    <li className={"directory-item " + activeChecker()}>
      <div className={"item-header"} onClick={() => handleClick()}>
        {icon}
        <p className={"item-name"}>{name}</p>
      </div>
      {children}
    </li>
  )
}

export default FilterItem;
