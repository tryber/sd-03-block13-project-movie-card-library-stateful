import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="searchText">Inclui o texto</label>
          <input
            type="text"
            id="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="bookmarkedOnly">Mostrar somente favoritos</label>
          <input
            type="checkbox"
            id="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="selectedGenre">Filtrar por gênero</label>
          <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value={''}>Todos</option>
            <option value={'action'}>Ação</option>
            <option value={'comedy'}>Comédia</option>
            <option value={'thriller'}>Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
