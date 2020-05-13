import React, { Component } from 'react';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySelect: ['Ação', 'Comédia', 'Suspense'],
      arrayVal: ['action', 'comedy', 'thriller'],
    };
  }


  render() {
    const { arraySelect, arrayVal } = this.state;
    return (
      <div>
        {arraySelect.map((el, index) => (
          <option value={arrayVal[index]}>
            {el}
          </option>
        ))}
      </div>
    );
  }
}
