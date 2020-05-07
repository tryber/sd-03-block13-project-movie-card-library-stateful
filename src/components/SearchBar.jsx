import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form>
        <div>
          <label for='textSearch'>Inclui o texto:</label>
          <input id='textSearch' type='text' value={this.props.searchText} onChange={this.props.onSearchTextChange}></input>
        </div>
        <div>
          <label for='selectFavorites'>Mostrar somente favoritos</label>
          <input id='selectFavorites' type='checkbox' checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}></input>
        </div>
        <div>
          <label for='filter'>Filtrar por gênero</label>
          <select id ='filter' value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value=''>Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </div>
      </form>
    )
  }
}

export default SearchBar;
