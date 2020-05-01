import React, { Component } from 'react';
import '../JSX_Styles/searchbarStyle.css';

export class searchbarInput extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form className="searchForm">
          <label htmlFor="labelText">
            Inclui o texto:
            <br />
            <input
              id="labelText"
              value={searchText}
              onChange={onSearchTextChange}
              style={{ width: '600px', borderRadius: '5px' }}
              type="text"
              name="search"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default searchbarInput;
