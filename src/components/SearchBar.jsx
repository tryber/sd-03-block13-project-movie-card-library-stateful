import React from 'react';
import Input from './Input';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.createInputs = this.createInputs.bind(this);
  }

  createInputs() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <Input
          name="searchText"
          text="Inclui o texto:"
          handler={onSearchTextChange}
          value={searchText}
        />
        <Input
          name="bookmarkedOnly"
          input="checkbox"
          text="Mostrar somente favoritos"
          handler={onBookmarkedChange}
        />
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
      </form>
    );
  }

  render() {
    return this.createInputs();
  }
}
