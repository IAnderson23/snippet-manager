import FilterList from "./filter-list.component.tsx";
import useUniqueTags from "../hooks/use-unique-tags.hook.ts";
import TagItem from "./tag-item.component.tsx";


function TagList() {
  const uniqueTags = useUniqueTags()

  return (
    <FilterList name={'Tags'}>
      {uniqueTags.map((tag, index) => {
        return <TagItem tag={tag} key={index}/>
      })}
    </FilterList>
  )
}

export default TagList;
