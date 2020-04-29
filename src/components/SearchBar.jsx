import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label>
          Inclui o texto
          <input
            type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
            type="checkbox" 
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value={''}>Todos</option>
            <option value={'action'}>Ação</option>
            <option value={'comedy'}>Comédia</option>
            <option value={'thriller'}>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
