import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="text">Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="">Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="">Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
