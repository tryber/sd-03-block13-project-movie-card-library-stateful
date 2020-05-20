import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form className="input-fields">
        <label htmlFor="Incluir texto" className="label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="Mostrar filmes favoritos" className="check-box">
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos
        </label>
        <label htmlFor="Filtrar filmes por gênero" className="label">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
