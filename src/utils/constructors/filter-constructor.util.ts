import {IFilter} from "@atoms/filter.atom.ts";

class Filter {
  static default(): IFilter {
    return {type: 'smartGroup', target: 'all'}
  }

  static smartGroup(target: string): IFilter {
    return {type: 'smartGroup', target}
  }

  static folder(target: number): IFilter {
    return {type: 'folder', target}
  }

  static tag(target: string): IFilter {
    return {type: 'tag', target}
  }
}

export default Filter;
