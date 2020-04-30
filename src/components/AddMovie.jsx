// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => ({
      [name]: value
    }));
  };

  render() {
    return (
      <form>
        <label htmlFor="title"><span>Título</span></label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default AddMovie;
