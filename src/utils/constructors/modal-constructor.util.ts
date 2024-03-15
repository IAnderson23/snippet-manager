import {IModal, ITarget} from "@atoms/modal.atom.ts";

class Modal {
  static default(): undefined {
    return undefined;
  }

  static create(targetType: ITarget["type"], target: ITarget[]): IModal {
    return {action: 'create', targetType: targetType, target: target};
  }

  static edit(targetType: IModal["targetType"], target: IModal["target"]): IModal  {
    return {action: 'edit', targetType: targetType, target: target};
  }

  static delete(targetType: IModal["targetType"], target: IModal["target"]): IModal  {
    return {action: 'delete', targetType: targetType, target: target};
  }
}

export default Modal;
