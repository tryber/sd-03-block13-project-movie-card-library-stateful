// implement SearchBar component here
import React from 'react';
import '../form.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.searchBarItens = this.searchBarItens.bind(this);
  }

  searchBarItens(name, text, type, value, checked, callback) {
    return (
      <label htmlFor={this.name}>
        {text}
        <input type={type} id={name} value={value} checked={checked} onChange={callback} />
      </label>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        {this.searchBarItens('search', 'Inclui o texto', 'text', searchText, false, onSearchTextChange)}
        {this.searchBarItens('bookmarkedOnly', 'Mostrar somente favoritos', 'checkbox', '', bookmarkedOnly, onBookmarkedChange)}
        <label htmlFor="selectedGenre">
          Filtrar por gênero
          <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
