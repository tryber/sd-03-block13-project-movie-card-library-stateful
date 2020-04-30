import React from 'react';
import Genre from '../genreData';

class SearchBar extends React.Component {
  render() {
    const {
      bookmarkedOnly, onBookmarkedChange, onSearchTextChange, onSelectedGenreChange,
      searchText, selectedGenre,
    } = this.props;

    return (
      <form action="">
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
            {Genre.map((genre) => <option key={genre.pt} value={genre.en}>{genre.pt}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
