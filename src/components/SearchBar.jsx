import React from 'react';

const SearchBar = () => {
  const {
    searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
  } = this.props;

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
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </label>
    </form>
  );
};

export default SearchBar;
