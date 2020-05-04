import React from 'react';

export default class SearchBar extends React.Component {
  includesText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText">
        Inclui o texto
        <input
          type="text"
          name="searchText"
          id="searchText"
          onChange={onSearchTextChange}
          value={searchText}
        />
      </label>
    );
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     cpf: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     addressKind: '',
  //     resume: '',
  //     role:'',
  //     hasEntered: false,
  //   };

  // console.log('The constructor is being called by the object?:', this)
  // this.changeName = this.changeName.bind(this);

  favoriteOnly() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="favoritos">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="favoritos"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
        />
      </label>
    );
  }

  render() {
    const {
      selectedGenre, onSelectedGenreChange,
    } = this.props; // searchText string, onSearchTextChange callback, bookmarkedOnly boolean
    // onBookmarkedChange callback, selectedGenre string, onSelectedGenreChange callback
    return (
      <form>
        {this.favoriteOnly()}
        {this.includesText()}
        {/* <label htmlFor="input">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="input">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label> */}
        <label htmlFor="select">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange} id="select" name="selectedGenre">
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
