import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <label>Inclui o texto:
        <input type={'text'} value={props.searchText}
          onChange={props.onSearchTextChange} />
      </label>
      <label>Mostrar somente favoritos
        <input type={'checkbox'} checked={props.bookmarkedOnly}
          onChange={props.onBookmarkedChange} />
      </label>
      <label>Filtrar por gênero
        <select value={props.selectedGenre} onChange={props.onSelectedGenreChange}>
          <option value={''}>Todos</option>
          <option value={'action'}>Ação</option>
          <option value={'comedy'}>Comédia</option>
          <option value={'thriller'}>Suspense</option>
        </select>
      </label>
    </form>
  );
}

export default SearchBar;