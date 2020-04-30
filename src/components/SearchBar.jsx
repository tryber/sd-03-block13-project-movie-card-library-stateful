import React, { Component } from "react";

// import { Container } from './styles';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>
          Inclui o texto:
          <input
            type="text"
            value="searchText"
            onChange={props.onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={props.bookmarkedOnly}
            onChange={props.onBookmarkedChange}
          />
        </label>
      </div>
    );
  }
}
