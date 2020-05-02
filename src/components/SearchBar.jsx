import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input type="text" name="searchText" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} name="genre" onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            {/* <option value="romance">Romance</option> */}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
