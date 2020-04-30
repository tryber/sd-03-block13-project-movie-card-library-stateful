// implement SearchBar component here
import React from 'react';
import Genre from '../genreData';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.formInputs = this.formInputs.bind(this);
  }

  formInputs() {
    return (
      <div>
        <label htmlFor="search-text">
          Inclui o texto:
          <input
            type="text"
            value={this.props.searchText}
            id="search-text"
            onChange={this.props.onSearchTextChange}
          />
        </label>
        <label htmlFor="search-checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="favorite-books"
            id="search-checkbox"
            onChange={this.props.onBookmarkedChange}
            checked={this.props.bookmarkedOnly}
          />
        </label>
      </div>
    );
  }

  render() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <form>
        {this.formInputs()}
        <label htmlFor="genre-select">
          Filtrar por gênero
          <select
            name="genre-select"
            id="genre-select"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
          >
            {Genre.map((genre) => (
              <option key={genre.label} value={genre.value}>
                {genre.label}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
