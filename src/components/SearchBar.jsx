import React from 'react';
import '../JSX_Styles/searchbarStyle.css';
import Data from './genreData.js';

const SearchBar = (props) => {
  const {
    bookmarkedOnly, onBookmarkedChange, onSearchTextChange, onSelectedGenreChange,
    searchText, selectedGenre,
  } = props;

  return (
    <form className="searchForm">
      <label className="searchLabel" htmlFor="s.t">Inclui o texto:</label><br />
      <input
        value={searchText} onChange={onSearchTextChange}
        className="searchInput" id="s.t" type="text"
      />
      <label htmlFor="c.b"><br />
        <input
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
          className="checkbox_Input" id="c.b" type="checkbox"
        />Mostrar somente favoritos:</label>
      <label className="genreLabel" htmlFor="g.s">Filtrar por gênero:</label>
      <select
        className="genreSel" id="g.s"
        value={selectedGenre} onChange={onSelectedGenreChange}
      >{Data.map((e) => <option key={e.text} value={e.value}>{e.text}</option>)}
      </select>
    </form>
  );
};

export default SearchBar;
