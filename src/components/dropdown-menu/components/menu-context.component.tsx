import {createContext, Dispatch, HTMLProps, SetStateAction} from "react";

interface MenuContextType {
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: Dispatch<SetStateAction<number | null>>
  setHasFocusInside: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const MenuContext = createContext<MenuContextType>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false
});

export default MenuContext;

