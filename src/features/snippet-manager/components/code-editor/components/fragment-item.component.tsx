import {useAtom} from "jotai";
import {fragmentAtom} from "@atoms/fragment.atom.ts";
import {IFragment} from "@database/database.types.ts";

interface IItemProps {
  item: IFragment;
  className?: 'last'
}

function FragmentItem({item, className}: IItemProps) {
  const [fragment, setFragment] = useAtom(fragmentAtom);

  function isActive(): string {
    return fragment?.id === item.id ? 'active ' : '';
  }

  return (
    <li className={'fragment-item ' + isActive() + className} onClick={() => setFragment(item)}>
      <p>{item.name}</p>
    </li>
  )
}

export default FragmentItem;
