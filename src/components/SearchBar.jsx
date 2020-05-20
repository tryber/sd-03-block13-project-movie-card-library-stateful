import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookMarkedChange, selectedGenge, onSelectedGenreChange } = this.props;
    return (
      <form className="input-fields">
        <label htmlFor="Incluir texto" className="label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="Mostrar filmes favoritos" className="check-box">
          <input 
            type="checkBox"
            checked={bookmarkedOnly}
            onChange={onBookMarkedChange}
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="Filtrar filmes por gênero" className="label">
          Filtrar por gênero
          <select value={selectedGenge} onChange={onSelectedGenreChange}>
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
