import {IFragment, updateFragment} from "@features/database";

function reorderFragments(fragments: IFragment[]): void {
  const newOrder = fragments.sort((a, b) => a.order - b.order);
  newOrder.forEach((fragments, index) => fragments.order = index + 1);
  newOrder.forEach(fragment => updateFragment(fragment.id!, fragment))
}

export default reorderFragments;
