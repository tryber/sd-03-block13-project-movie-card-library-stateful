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
        <select name="gender" id="gender" onChange={this.props.onSelectedGenreChange}>
          <option value="Todos">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </React.Fragment>
    );
  }

  // addInput(type, value, name, labelText) {
  //   return (
  //     <section>
  //       <label htmlFor={name}>{labelText}</label>
  //       <input type={type} name={name} id={name} value={value}
  //        onChange={this.props.onSelectedGenreChange } ></input>
  //     </section>
  //   )
  // }

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
          onChange={this.props.onBookedmarkedChange}
          name="check" type="checkbox"
        />

        {this.addOption()}
        {/* {this.addInput('checkBox', 'name', "name", "Teste de Input")} */}

      </form>
    );
  }
}
