import React from 'react';

const SearchBar = (props) => {
  const {
    searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
  } = props;

  return (
    <form>
      <label htmlFor="searchText">Inclui o texto:
      <input type="text" id="searchText" value={searchText} onChange={onSearchTextChange} />
      </label>
      <label htmlFor="check">Mostrar somente favoritos
      <input type="checkbox" id="check" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      </label>
      <label htmlFor="selectedGenre">Filtrar por gênero
      <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange} />
        <option key="Todos" value="">Todos</option>
        <option key="Ação" value="action">Ação</option>
        <option key="Comédia" value="comedy">Comédia</option>
        <option key="Suspense" value="thriller">Suspense</option>
      </label>
    </form>
  );
};

export default SearchBar;
