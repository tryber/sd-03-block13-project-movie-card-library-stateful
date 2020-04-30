// implement SearchBar component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    console.log('searchBar this props', this.props);
    console.log('state do searchbar', this);

    const { searchText, onSearchTextChange } = this.props;

    return (
      <form action="">
        <h3>Search movie</h3>
        <label htmlFor="Inclui-o-texto">Inclui o texto: </label>
        <input value={searchText} onChange={this.props.onSearchTextChange} name="Inclui-o-texto" type="text" />

        <br /><br />

        <label htmlFor="check">Mostrar somente favoritos</label>
        <input value='' onChange name="check" type="checkBox" />

        <br /><br />

        <label htmlFor="gender">Filtrar por gênero</label>
        <select value="selectedGenre" name="gender" id="gender" value='' onChange>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      </form>
    );
  }
}
