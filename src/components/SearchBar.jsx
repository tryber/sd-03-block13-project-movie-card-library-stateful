import React from 'react';

export default class SearchBar extends React.Component {
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

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
        <form>
          <label htmlFor="input">
            Inclui o texto:
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="input">
            Mostrar somente favoritos
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="input">
            Filtrar por gênero
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thrilles">Suspense</option>
            </select>
          </label>
        </form>
    );
  }
}
