// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    /*
    const {
    searchText, onSearchTextChange,
    bookmarkedOnly, onBookmarkedChange, selectedGenre,
    onSelectedGenreChange
    } = this.props;
    */
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="searchText"><span>Inclui o texto:</span>
            <input
              type="text"
              name="searchBarText"
              value={searchText}
              id="searchText"
              onChange={onSearchTextChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="checkbox"><span>Mostrar somente favoritos</span>
            <input
              type="checkbox" name="searchBarCheckbox"
              id="checkbox" checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
