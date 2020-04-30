import React from 'react';
import Input from './Input';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.firstInputs = this.firstInputs.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    this.setState({ name: input.value });
    console.log(this.state);
  }

  firstInputs() {
    const { searchText, onSearchTextChange, onBookmarkedChange } = this.props;

    return (
      <div>
        <Input
          name="searchText"
          text="Inclui o texto:"
          value={searchText}
          handler={onSearchTextChange}
        />
        <Input
          name="bookmarkedOnly"
          input="checkbox"
          text="Mostrar somente favoritos"
          handler={onBookmarkedChange}
        />
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
