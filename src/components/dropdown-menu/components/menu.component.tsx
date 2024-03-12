import {HTMLProps, ReactNode} from "react";
import {FloatingTree, useFloatingParentNodeId} from "@floating-ui/react";
import DropdownMenu from "./dropdown-menu.component.tsx";

export interface MenuProps {
  menuLabel: ReactNode;
  alignment: string
  nested?: boolean;
  children?: ReactNode;
}

function Menu(props: MenuProps & HTMLProps<HTMLButtonElement>) {
  const parentID = useFloatingParentNodeId();

  if (parentID === null) {
    return (
      <FloatingTree>
        <DropdownMenu {...props}/>
      </FloatingTree>
    )
  }

  return <DropdownMenu {...props}/>;
}

export default Menu;
