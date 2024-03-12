import {ButtonHTMLAttributes, FocusEvent, MouseEvent, useContext} from "react";
import {useFloatingTree, useListItem} from "@floating-ui/react";
import MenuContext from "./menu-context.component.tsx";

export interface MenuItemProps {
  label: string;
  disabled?: boolean;
}

function MenuItem(props: MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const {label, disabled} = props

  const menu = useContext(MenuContext);
  const item = useListItem({label: disabled ? null : label});
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
    <button
      {...props}
      ref={item.ref}
      type={"button"}
      role={"menu-item"}
      className={"menu-item"}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick: (event: MouseEvent<HTMLButtonElement>) => {
          props.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus: (event: FocusEvent<HTMLButtonElement>) => {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        }
      })}
    >
      {label}
    </button>
  );
}

export default MenuItem;
