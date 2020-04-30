import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { options, value, onChange } = this.props;
    return (
      <select value={value} onChange={onChange}>
        {options.map(
          (option) => (
            <options
              key={value}
              value={option[0]}
            >
              {option[1]}
            </options>
          ),
        )}
      </select>
    );
  }
}

export default Select;
