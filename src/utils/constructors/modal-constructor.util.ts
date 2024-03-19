import {IAction, IModal, ITarget} from "@atoms/modal.atom.ts";
import {isFolder, isSnippet} from "@utils/type-guards.util.ts";

class Modal {

  static create(action: IAction, item: ITarget["item"]): IModal {
    const target: ITarget = this.createTarget(item);
    return {action, target}
  }

  private static createTarget(item: ITarget["item"]): ITarget {
    let target: ITarget;

    if (isFolder(item))
      target = {type: 'folder', item}
    else if (isSnippet(item))
      target = {type: 'snippet', item}
    else
      target = {type: 'fragment', item}

    return target
  }
}

export default Modal;



