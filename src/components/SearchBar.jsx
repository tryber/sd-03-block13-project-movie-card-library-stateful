import React from 'react';
import '../JSX_Styles/searchbarStyle.css';
import Data from './genreData.js';

class SearchBar extends React.Component {
  render() {
    const {
      bookmarkedOnly, onBookmarkedChange, onSearchTextChange, onSelectedGenreChange,
      searchText, selectedGenre,
    } = this.props;

    return (
      <form className="searchForm">
        <label className="searchLabel" htmlFor="s.t">
          Inclui o texto:<br />
          <input
            value={searchText} onChange={onSearchTextChange}
            className="searchInput" id="s.t" type="text"
          />
        </label><br />
        <label htmlFor="c.b">
          <input
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
            className="checkbox_Input" id="c.b" type="checkbox"
         />
          Mostrar somente favoritos:
        </label><br />
        <label className="genreLabel" htmlFor="g.s">
          Filtrar por gênero:<br />
          <select className="genreSel" id="g.s" 
            value={selectedGenre} onChange={onSelectedGenreChange}
          >
            {Data.map((e) => <option key={e.text} value={e.value}>{e.text}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
