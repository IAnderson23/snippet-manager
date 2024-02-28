import {ReactElement, ReactNode} from "react";

interface IFilterListProps {
  children: ReactNode;
  header?: ReactNode;
  name: string;
}

function FilterList({children, header, name}: IFilterListProps): ReactElement {
  return (
    <div className={'filter-list-container'}>
      <div className={'list-header'}>
        <h5 className={'list-name'}>{name}</h5>
        {header}
      </div>
      <ul className={'filter-list'}>
        {children}
      </ul>
    </div>
  )
}

export default FilterList;
