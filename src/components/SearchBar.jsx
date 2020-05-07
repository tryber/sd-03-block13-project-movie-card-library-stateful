import React from 'react';
import genreData from '../genreData';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input id="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="box">
          Mostrar somente favoritos:
          <input id="box" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genreSelect">
          Filtrar por gênero:
          <select id="genreSelect" value={selectedGenre} onChange={onSelectedGenreChange}>
            {genreData.map((genre) => (
              <option key={genre.text} value={genre.value}>{genre.text}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
