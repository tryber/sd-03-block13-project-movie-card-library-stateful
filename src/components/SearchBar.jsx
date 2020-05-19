import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookMarkedChange, selectedGenge, onSelectedGenre } = this.props;
    return (
      <form className="search">
        <label htmlFor="Incluir texto">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="Mostrar filmes favoritos">
          Mostrar somente favoritos
          <input type="checkBox" checked={bookmarkedOnly} onChange={onBookMarkedChange} />
        </label>
        <label htmlFor="Filtrar filmes por gênero">
          Filtrar por gênero
          <select value={selectedGenge} onChange={onSelectedGenre}>
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
