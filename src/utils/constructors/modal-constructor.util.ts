import {IModal} from "@atoms/model-atom.ts";
import {IFolder, IFragment, ISnippet} from "../../database/database.types.ts"

class Modal {
  static default(): IModal {
    return { type: undefined, subType: undefined, target: undefined };
  }

  static create(subType: 'folder' | 'snippet' | 'fragment', target: IFolder | ISnippet | IFragment): IModal {
    return {type: 'create', subType: subType, target: target};
  }

  static edit(subType: 'folder' | 'snippet' | 'fragment', target: IFolder | ISnippet | IFragment): IModal  {
    return {type: 'edit', subType: subType, target: target};
  }

  static delete(subType: 'folder' | 'snippet' | 'fragment', target: IFolder | ISnippet | IFragment): IModal  {
    return {type: 'delete', subType: subType, target: target};
  }
}

export default Modal;
