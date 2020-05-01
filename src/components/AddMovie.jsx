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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    const change = { [name]: value };
    this.setState(() => (change));
  }

  render() {
    return (
      <form>
        <label htmlFor="title"><span>Título</span></label>
        <input type="text" name="title" value={this.state.title} onChange={(e) => { this.handleChange(e.target.value, 'title'); }} /> <br />
        <label htmlFor="subtitle"><span>Subtítulo</span></label>
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={(e) => { this.handleChange(e.target.value, 'subtitle'); }} /> <br />
        <label htmlFor="imagePath"><span>Imagem</span></label>
        <input type="text" name="imagePath" value={this.state.imagePath} onChange={(e) => { this.handleChange(e.target.value, 'imagePath'); }} /> <br />
        <label htmlFor="storyline"><span>Sinopse</span></label>
        <textarea type="textarea" name="storyline" value={this.state.storyline} onChange={(e) => { this.handleChange(e.target.value, 'storyline'); }} /> <br />
      </form>
    );
  }
}

export default AddMovie;
