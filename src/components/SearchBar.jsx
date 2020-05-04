import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.searchText,
      onSearchTextChange: this.props.onSearchTextChange,
      bookmarkedOnly: this.props.bookmarkedOnly,
      onBookmarkedChange: this.props.onBookmarkedChange,
      selectedGenre: this.props.selectedGenre,
      onSelectedGenreChange: this.props.onSelectedGenreChange,
    };
    this.chamaNoInput = this.chamaNoInput.bind(this);
  }

  chamaNoInput(type, id, value, onChange) {
    if (value === 'checked') {
      return <input type={type} id={id} checked={this.state.bookmarkedOnly} onChange={onChange} />;
    }
    return <input type={type} id={id} value={value} onChange={onChange} />;
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="textFilter">Inclui o texto</label>
          {this.chamaNoInput('text', 'textFilter', this.state.searchText, this.state.onSearchTextChange)}
          <label htmlFor="favoritos">Mostrar somente favoritos</label>
          {this.chamaNoInput('checkbox', 'favoritos', 'checked', this.state.onBookmarkedChange)}
          <label htmlFor="gender">Filtrar por gênero</label>
          <select value={this.state.selectedGenre} onChange={this.state.onSelectedGenreChange}>
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

export default SearchBar;
