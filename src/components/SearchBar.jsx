// implement SearchBar component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    
  }


  render() {
    return (
      <form action="">
        <h3>Search movie</h3>
        <label htmlFor="Inclui o texto">Inclui o texto: </label>
        <input name="Inclui o texto" type="text" onChange value={this.props.searchText} />

        <br /><br />

        <label htmlFor="check">Mostrar somente favoritos</label>
        <input checked="bookmarkedOnly" onChange name="check" type="checkBox" />

        <br /><br />

        <label htmlFor="">Filtrar por gênero</label>
        <select value="selectedGenre" name="gender" id="gender" onChange>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>


      </form>
    )
  }
}
