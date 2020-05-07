import React from 'react';

class SearchBar extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    const { 
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange 
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="textSearch">Inclui o texto:</label>
          <input id="textSearch" type="text" value={searchText} onChange={onSearchTextChange} />
        </div>
        <div>
          <label htmlFor="fav">Mostrar somente favoritos</label>
          <input id="fav" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </div>
        <div>
          <label htmlFor="filter">Filtrar por gênero</label>
          <select id="filter" value={selectedGenre} onChange={onSelectedGenreChange} >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
