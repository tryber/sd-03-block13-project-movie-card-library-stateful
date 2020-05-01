import React from 'react';

class SearchBar extends React.Component {

  selectGenreOptions() {
    return (
      <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
        <option value={''}>Todos</option>
        <option value={'action'}>Ação</option>
        <option value={'comedy'}>Comédia</option>
        <option value={'thriller'}>Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto
          <input
            type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}
          />
        </label>
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor="selectedGenre">
          Filtrar por gênero
          {this.selectGenreOptions()}
        </label>
      </form>
    );
  }
}

export default SearchBar;
