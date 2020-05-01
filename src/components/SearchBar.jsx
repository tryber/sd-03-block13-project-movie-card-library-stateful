import React from 'react';

class SearchBar extends React.Component {
  text() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText">
        Inclui o texto
        <input
          type="text"
          id="searchText"
          name="searchText"
          onChange={onSearchTextChange}
          value={searchText}
        />
      </label>
    );
  }

  favorit() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="favoritos">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="favoritos"
          name="bookmarkedOnly"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
        />
      </label>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.text()}
        {this.favorit()}
        <label htmlFor="select">
          Filtrar por gênero
          <select
            id="select"
            name="selectedGenre"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
