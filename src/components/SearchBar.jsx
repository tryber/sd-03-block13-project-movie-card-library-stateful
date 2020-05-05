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
      <form action="get" className="searchBar">
        <label htmlFor="textInput">
          Inclui o texto
          <input type="text" name="movieText" id="textInput" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="checkBox">
          Mostrar somente favoritos
          <input type="checkbox" name="movieCheckBox" id="checkBox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="select">
          Filtrar por gênero
          <select name="genreSelect" id="select" value={selectedGenre} onChange={onSelectedGenreChange}>
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
