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
    this.handleRating = this.handleRating.bind(this);
  }

  handleChange(value, name) {
    const change = { [name]: value };
    this.setState(() => (change));
  }

  handleRating(value, name) {
    const change = { [name]: Number(value) };
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
        <label htmlFor="rating"><span>Avaliação</span></label>
        <input type="number" name="rating" value={this.state.rating} onChange={(e) => { this.handleRating(e.target.value, 'rating'); }} /> <br />
        <label htmlFor="genre"><span>Gênero</span></label>
        <select value={this.state.genre} name="genre" onChange={(e) => { this.handleChange(e.target.value, 'genre'); }}>
          <option key="action" value="action">Ação</option>
          <option key="comedy" value="comedy">Comédia</option>
          <option key="thriller" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default AddMovie;
