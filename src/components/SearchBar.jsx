import React from 'react';
import '../JSX_Styles/searchbarStyle.css';
import Data from './genreData'

class SearchBar extends React.Component {
  render() {
    const {
      bookmarkedOnly, onBookmarkedChange, onSearchTextChange, onSelectedGenreChange,
      searchText, selectedGenre,
    } = this.props;

    return (
      <form className="searchForm">
        <label className="searchLabel" htmlFor="searchText">
          Inclui o texto:<br />
          <input className="searchInput" id="searchText" type="text" 
          value={searchText} onChange={onSearchTextChange} />
        </label><br />
        <label htmlFor="box">
          <input className="checkbox_Input" id="box" type="checkbox" 
          checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos:
        </label><br />
        <label className="genreLabel" htmlFor="genreSelect">
          Filtrar por gênero:<br />
          <select className="genreSelect" id="genreSelect" value={selectedGenre} onChange={onSelectedGenreChange}>
            {Data.map(info => <option key={Math.random() * 1000} value={info.value}>{info.genre}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
