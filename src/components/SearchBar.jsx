// implement SearchBar component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);
  }

  addOption() {
    return (
      <React.Fragment>
        <label htmlFor="gender">Filtrar por gênero</label>
        <select
          name="gender"
          value={this.props.selectedGenre}
          id="gender"
          onChange={this.props.onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </React.Fragment>
    );
  }

  render() {
    // console.log('searchBar this props', this.props.onSearchTextChange);
    // console.log('this do searchbar', this);
    // console.log('this.props do searchBar', this.props);

    const { searchText, onSearchTextChange } = this.props;

    return (
      <form className="search-bar">
        <h5>Search your movie</h5>

        <label htmlFor="Inclui-o-texto">Inclui o texto: </label>
        <input onChange={onSearchTextChange} value={searchText} name="Inclui-o-texto" type="text" />

        <label htmlFor="check">Mostrar somente favoritos</label>
        <input
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
          name="check" type="checkbox" value={this.props.bookmarkedOnly}
        />

        {this.addOption()}
        {/* {this.addInput('checkBox', 'name', "name", "Teste de Input")} */}

      </form>
    );
  }
}
