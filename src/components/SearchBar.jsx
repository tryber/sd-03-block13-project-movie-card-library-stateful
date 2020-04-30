import React, { Component } from 'react';

// import { Container } from './styles';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="incluiText">
          Inclui o texto:
          <input
            type="text"
            value="searchText"
            onChange={this.props.onSearchTextChange}
          />
        </label>
        <label htmlFor="checkBox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
        </label>

        <select name="select" />
      </form>
    );
  }
}
