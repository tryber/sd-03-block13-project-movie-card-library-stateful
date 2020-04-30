import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.firstInputs = this.firstInputs.bind(this);
  }

  firstInputs() {
    const { searchText, onSearchTextChange, onBookmarkedChange, bookmarkedOnly } = this.props;

    return (
      <div>
        <label htmlFor="searchText">
          Inclui o texto
          <input
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <label htmlFor="bookmark">
          Mostrar somente favoritos
          <input
            name="bookmark"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
      </div>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Search Movie</legend>
            {this.firstInputs()}
            <label htmlFor="selectedGenre">
              Filtrar por gênero
              <select
                name="selectedGenre"
                id="selectedGenre"
                value={selectedGenre}
                onChange={onSelectedGenreChange}
              >
                <option value="">Todos</option>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchBar;
