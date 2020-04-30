import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    console.log('The constructor is being called by the object?:', this)
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const input = event.target;
    this.setState({
      name: input.value.toUpperCase(),
    });
  }

  handleChangeRating = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Personal Data</legend>
            <div>
              Título:
              <input
              type="text"
              name="name"
              maxLength="40"
              required
              value={this.state.name}
              onChange={this.changeName}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}