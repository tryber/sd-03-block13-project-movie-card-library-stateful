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
      <label htmlFor="search"> Inclui o texto</label>
      <input type="text" id="search" value={searchText} onChange={onSearchTextChange} />
      <label htmlFor="favorites">Mostrar somente favoritos</label>
      <input
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
        name="selectF"
      />
      <label htmlFor="selectedGenere">Filtrar por gênero</label>
      <select value={selectedGenre} onChange={onSelectedGenreChange} name="selectedGenere">
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </form>
  );
}

export default SearchBar;
