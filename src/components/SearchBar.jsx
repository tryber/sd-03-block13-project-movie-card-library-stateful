import React from 'react';

class SearchBar extends React.Component {

  textSearchRenderer() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="textInput">
        Inclui o texto
        <input
          type="text"
          name="movieText"
          id="textInput"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  bookmarkCheckRenderer() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkBox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="movieCheckBox"
          id="checkBox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  genreSelectorRenderer() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select">
        Filtrar por gênero
        <select
          name="genreSelect"
          id="select"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form action="get" className="searchBar">
        {this.textSearchRenderer()}
        {this.bookmarkCheckRenderer()}
        {this.genreSelectorRenderer()}
      </form>
    );
  }
}

export default SearchBar;
