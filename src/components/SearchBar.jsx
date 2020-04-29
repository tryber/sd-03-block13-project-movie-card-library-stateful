import React from 'react';

function SearchBar(props) {
  const {
    searchText, onSearchText, bookmarkedOnly,
    onBookmarked, selectedGenre, onSelectedGenre,
  } = props;

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (<form onChange={handleForm}>
      <label htmlFor="search"> Inclui o texto</label>
      <input type="text" id="search" value={searchText } onChange={onSearchText }/>
      <label htmlFor="seleectFavorito">Mostrar somente favoritos</label>
      <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarked} name="seleectFavorito" />
     <label htmlFor="selectedGenero">Filtrar por gênero</label>
     <select value={selectedGenre} onChange={onSelectedGenre} name="selectedGenero">
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </form>
  );
}

export default SearchBar;
