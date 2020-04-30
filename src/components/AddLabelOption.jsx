import React from 'react';

class AddLabelOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = { genre: 'action' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const arraySelect = ['Ação', 'Comédia', 'Suspense'];
    const arrayVal = ['action', 'comedy', 'thriller'];
    const detructuring = this.state;
    return (
      <div>
        <label htmlFor="Gênero">
      Gênero
          <select
            name="genre"
            value={detructuring.texts}
            onChange={this.handleChange}
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
