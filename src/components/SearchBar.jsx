// implement SearchBar component here
import React from 'react';
// Refatorar componente para até 25 linhas, testes
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.formInputs = this.formInputs.bind(this);
  }

  formInputs() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="search-text">
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            id="search-text"
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="search-checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="favorite-books"
            id="search-checkbox"
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
          />
        </label>
      </div>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.formInputs()}
        <label htmlFor="genre-select">
          Filtrar por gênero
          <select
            name="genre-select"
            id="genre-select"
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
