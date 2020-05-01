import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="searchText">
            Inclui o texto
            <input type="text" id="searchText" name="searchText" onChange={onSearchTextChange} value={searchText} />
          </label>
          <label htmlFor="favoritos">
            Mostrar somente favoritos
            <input type="checkbox" id="favoritos" name="bookmarkedOnly" onChange={onBookmarkedChange} checked={bookmarkedOnly} />
          </label>
          <label htmlFor="select">
            Filtrar por gênero
            <select id="select" name="selectedGenre" onChange={onSelectedGenreChange} value={selectedGenre}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
