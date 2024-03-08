import SearchBar from "./search-bar.component.tsx";
import SortControls from "./sort-controls.component.tsx";
import AddSnippetButton from "./add-snippet-button.component.tsx";
import SnippetList from "./snippet-list.component.tsx";

function SnippetSelector() {
  return (
    <div id={'snippet-selector'}>
      <div id={'snippet-selector-header'}>
        <SearchBar/>
        <div id={'controls-container'}>
          <SortControls/>
          <AddSnippetButton/>
        </div>
      </div>
      <SnippetList/>
    </div>
  )
}

export default SnippetSelector;
