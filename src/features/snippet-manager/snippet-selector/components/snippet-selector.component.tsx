import SearchBar from "./search-bar.component.tsx";
import SortControls from "./sort-controls.component.tsx";
import AddSnippetButton from "./add-snippet-button.component.tsx";

function SnippetSelector() {
  return (
    <div id={'snippet-selector'}>
      <SearchBar/>
      <div id={'controls-container'}>
        <SortControls/>
        <AddSnippetButton/>
      </div>

    </div>
  )
}

export default SnippetSelector;
