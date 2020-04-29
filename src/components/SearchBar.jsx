// implement SearchBar component here
import React from 'react';

function SearchBar(props) {
  const {
    searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange,
  } = props;

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onChange={handleForm}>
      <label htmlFor="search"> Inclui o texto</label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={onSearchTextChange}
      />
      <label>Mostrar somente favoritos</label>
      <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      <label>Filtrar por gênero</label>
      <select value={selectedGenre} onChange={onSelectedGenreChange}>
       <option value="">Todos</option>
       <option value="action">Ação</option>
       <option value="comedy">Comédia</option>
       <option value="thriller">Suspense</option>
      </select>
    </form>
  );
}

export default SearchBar;