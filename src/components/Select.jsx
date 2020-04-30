import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { options, value, onChange } = this.props;
    console.log(options);
    return (
      <select value={value} onChange={onChange}>
        {options.map(
          (option) => (
            <option
              key={option[0]}
              value={option[0]}
            >
              {option[1]}
            </option>
          ),
        )}
      </select>
    );
  }
}

export default Select;
