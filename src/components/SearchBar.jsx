// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchText: '' };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);

  }

  onSearchTextChange() {
    console.log('retornando', this);
  }

  onBookmarkedChange() {
    console.log('retornando', this);
  }

  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenre,
      selectedGenre,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="search-text">
            Inclui o texto:
            <input
              type="text"
              value={this.state.searchText}
              id="search-text"
              onChange={this.onSearchTextChange}
            />
          </label>
          <label htmlFor="search-checkbox">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="favorite-books"
              id="search-checkbox"
              onChange={this.onBookmarkedChange}
            />
          </label>
          <h1>Esta é uma searchBar</h1>
        </form>
      </div>
    );
  }
}

export default SearchBar;
