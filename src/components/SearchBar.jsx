// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenre,
      searchText,
      selectedGenre,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="search-text">
            Inclui o texto:
            <input
              type="text"
              value={searchText}
              id="search-text"
              onChange={onSearchTextChange}
            />
          </label>
          <label htmlFor="search-checkbox">
            Mostrar somente favoritos
          </label>
          <h1>Esta é uma searchBar</h1>
        </form>
      </div>
    );
  }
}

export default SearchBar;
