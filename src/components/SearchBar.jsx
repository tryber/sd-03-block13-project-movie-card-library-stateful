// implement SearchBar component here
import React from 'react';
import genres from '../genredata';

function SearchField(props) {
  return (
    <div>
      <label htmlFor="search-text">
        Inclui o texto:
        <input
          type="text"
          value={props.searchText}
          name="search-text"
          id="search-text"
          onChange={props.onSearchTextChange}
        />
      </label>
      <label htmlFor="search-checkbox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="search-checkbox"
          id="search-checkbox"
          onChange={props.onBookmarkedChange}
          checked={props.bookmarkedOnly}
        />
      </label>
    </div>
  );
}

function SearchBar(props) {
  const { selectedGenre, onSelectedGenreChange } = props;
  return (
    <form>
      <SearchField />
      <label htmlFor="genre-select">
        Filtrar por gênero
        <select
          name="genre-select"
          id="genre-select"
          onChange={onSelectedGenreChange}
          value={selectedGenre}
        >
          {genres.map((genre) => (
            <option key={genre.en} value={genre.en}>
              {genre.pr}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default SearchBar;
