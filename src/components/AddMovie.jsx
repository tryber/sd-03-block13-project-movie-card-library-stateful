import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.hadleChange = this.hadleChange.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }

  hadleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  clickMe() {
    this.setState(() => {
      alert('Movie Added with sucess');
    });
  }
  addGenre = () => {
    return (
      <select name="genre" value={this.state.genre} onChange={this.hadleChange}>
        <option valor="action">Ação</option>
        <option valor="comedy">Comédia</option>
        <option valor="thriller">Suspense</option>
      </select>
    )
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={this.state.title} onChange={this.hadleChange} />
        </label>
        <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.hadleChange} />
        <label htmlFor="imagePath">
          Imagem
          <input type="text" name="imagePath" value={this.state.imagePath} onChange="" />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={this.hadleChange} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" name="rating" value={this.state.rating} onChange={this.hadleChange} />
        </label>
        <label htmlFor="genre">Gênero{this.addGenre()}</label>
        <button onClick={this.clickMe} value="">Adicionar filme</button>
      </form>
    );
  }
}


export default AddMovie;
