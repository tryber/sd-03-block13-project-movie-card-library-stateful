// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="">Inclui o texto</label>
        <input
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </form>
    );
  }
}
