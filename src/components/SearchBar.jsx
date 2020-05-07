import React from 'react';
import genres from '../genreData';

const SearchBar = (props) => {
  const {
    searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
  } = props;

  return (
    <form>
      <label htmlFor="searchText">Inclui o texto:
      <input type="text" id="searchText" value={searchText} onChange={onSearchTextChange} />
      </label>
      <label htmlFor="check">Mostrar somente favoritos
      <input type="checkbox" id="check" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      </label>
      <label htmlFor="selectedGenre">Filtrar por gênero
      <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange} />
        {genres.map((genre) => (
        <option key={genre.value} value={genre.value}>{genre.option}</option>
        ))}
      </label>
    </form>
  );
};

export default SearchBar;
