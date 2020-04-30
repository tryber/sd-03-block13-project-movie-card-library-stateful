import React from 'react';

class AddLabelOption extends React.Component {
  render() {
    const arraySelect = ['Ação', 'Comédia', 'Suspense'];
    const arrayVal = ['action', 'comedy', 'thriller'];
    const detructuring = this.props;
    return (
      <div>
        <label htmlFor="Gênero">
      Gênero
          <select
            name="genre"
            value={detructuring.action}
            onChange={detructuring.handleChange}
            text="Gênero"
          >
            {arraySelect.map((el, index) => (
              <option value={
            arrayVal[index]
          }
              >
                {el}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default AddLabelOption;
