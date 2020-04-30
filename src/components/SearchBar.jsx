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
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form>
        <label htmlFor="searchText"><span>Inclui o texto: </span>
          <input
            type="text"
            name="searchBarText"
            value={searchText}
            id="searchText"
            onChange={onSearchTextChange}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
