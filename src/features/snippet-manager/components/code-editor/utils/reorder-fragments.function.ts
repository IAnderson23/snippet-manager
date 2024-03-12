import {IFragment} from "@database/database.types.ts";
import {updateFragment} from "@database/api/fragment.api.ts";


function reorderFragments(fragments: IFragment[]): void {
  const newOrder = fragments.sort((a, b) => a.order - b.order);
  newOrder.forEach((fragments, index) => fragments.order = index + 1);
  newOrder.forEach(fragment => updateFragment(fragment.id!, fragment))
}

export default reorderFragments;
