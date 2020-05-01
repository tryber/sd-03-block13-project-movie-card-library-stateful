import React, { Component } from 'react';
import '../JSX_Styles/searchbarStyle.css';

export class SearchBarCheckbox extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox">
          <input
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            style={{ marginRight: '10px' }}
            type="checkBox"
            name=""
            id="checkbox"
          />
          Mostrar somente favoritos
        </label>
      </div>
    );
  }
}

export default SearchBarCheckbox;
