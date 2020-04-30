import React from "react";

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
      <form>
        <label htmlFor="searchText">Inclui o texto:</label>
        <input
        type="text"
        id="searchText"
        value={searchText}
        onChange={onSearchTextChange} />

        <label htmlFor="favorits">Mostrar somente favoritos</label>
        <input type="checkbox"
        id="favorits"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange} />

        <label htmlFor="filterGenre">Filtrar por gênero</label>
        <select id="filterGenre"
        value={selectedGenre}
        onChange={onSelectedGenreChange}>
          <option value="" >Todos</option>
          <option value="action" >Ação</option>
          <option value="comedy" >Comédia</option>
          <option value="thriller" >Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
