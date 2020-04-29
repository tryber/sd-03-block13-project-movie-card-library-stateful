import React from 'react';

function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;
  return (
    <form>
      <div className="form">
        <label for="IncluiOtexto">Inclui o texto:&nbsp;</label>
        <input
          id="IncluiOtexto"
          onChange={onSearchTextChange}
          type="text"
          value={searchText}
        />
      </div>
      <div className="form">
        <input
          id="MostrarSomenteFavoritos"
          name="bookmarkedOnly"
          onChange={onBookmarkedChange}
          type="checkbox"
          checked={bookmarkedOnly}
        />
        <label for="MostrarSomenteFavoritos">&nbsp;Mostrar somente favoritos</label>
      </div>
      <div className="form">
        <label for="FiltrarPorGenero">Filtrar por gênero &nbsp;</label>
        <select
          id="FiltrarPorGenero"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    </form>
  );
}

export default SearchBar;
