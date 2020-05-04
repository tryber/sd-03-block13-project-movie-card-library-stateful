import React from "react";

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
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="textFilter">Inclui o texto</label>
          <input type="text" id="textFilter" 
            value={this.state.searchText} onChange={this.state.onSearchTextChange}
          />
          <label htmlFor="favoritos">Mostrar somente favoritos</label>
          <input type="checkbox" id="favoritos" checked={this.state.bookmarkedOnly} onChange={this.state.onBookmarkedChange}
          />
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
