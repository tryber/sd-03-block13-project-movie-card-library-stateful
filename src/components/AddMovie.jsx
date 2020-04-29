import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    this.setState({ name: input.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>New Movie</legend>
            <input 
              type="text" 
              value={this.state.name}
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMovie;
