import React from 'react';

export default class SearchBar extends React.Component {
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
          <label htmlFor="">Inclui o texto:</label>
          <input
            id="text"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="genre">Filtrar por gênero</label>
          <select
            name=""
            id="genre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}
