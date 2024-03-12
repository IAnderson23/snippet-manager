import Icon from "@mdi/react";
import {startCase} from 'lodash';
import {mdiMagnify} from "@mdi/js";
import {useAtomValue, useSetAtom} from "jotai";
import {ChangeEvent, useEffect, useState} from "react";

import userQueryAtom from "@atoms/user-query.atom.ts";

import {filterAtom} from "@atoms/filter.atom.ts";

function SearchBar() {
  const setSnippetQuery = useSetAtom(userQueryAtom);
  const filter = useAtomValue(filterAtom);
  const [search, setSearch] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setSnippetQuery(startCase(search))
  }, [search ,setSnippetQuery]);

  useEffect(() => {
    setSearch('')
  }, [filter]);

  return (
    <div id={'snippet-search'}>
      <div id={'search-icon'}>
        <Icon path={mdiMagnify} size={1}/>
      </div>
      <input placeholder={'Search...'} value={search} onChange={handleChange}/>
    </div>
  )
}

export default SearchBar;
