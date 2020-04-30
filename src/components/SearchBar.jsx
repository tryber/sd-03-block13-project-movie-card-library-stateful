import React from 'react';

function SearchBar(props) {
  const {
    searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange,
  } = props;
  return (
    <form className="form">
      <label htmlFor="IncluiOtexto">
        <span>Inclui o texto:&nbsp;</span>
        <input id="IncluiOtexto" onChange={onSearchTextChange} type="text" value={searchText} />
      </label>
      <label htmlFor="MostrarSomenteFavoritos">
        <input checked={bookmarkedOnly} id="MostrarSomenteFavoritos" onChange={onBookmarkedChange} type="checkbox" />
        <span>&nbsp;Mostrar somente favoritos</span>
      </label>
      <label htmlFor="FiltrarPorGenero">
        <span>Filtrar por gênero&nbsp;</span>
        <select id="FiltrarPorGenero" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    </form>
  );
}

export default SearchBar;
