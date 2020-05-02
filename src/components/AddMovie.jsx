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
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  creatInput(name, text, type, value) {
    return (
      <label htmlFor={text}>
        {text}
        <input
          type={type}
          value={value}
          onChange={this.hadleChange}
          name={name}
        />
      </label>
    );
  }

  creatTextarea(name, text, type, value) {
    return (
      <label htmlFor={text}>
        {text}
        <textarea
          type={type}
          value={value}
          onChange={this.hadleChange}
          name={name}
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.creatInput('title', 'Título', 'text', this.state.title)}
        {this.creatInput('subtitle', 'Subtítulo', 'text', this.state.subtitle)}
        {this.creatInput('imagePath', 'Imagem', 'text', this.state.imagePath)}
        {this.creatTextarea('storyline', 'Sinopse', 'text', this.state.storyline)}
        {this.creatInput('rating', 'Avaliação', 'number', this.state.rating)}
        <label htmlFor="genre">
          Gênero
          <select name="genre" text="" value={this.state.genre} onChange={this.hadleChange}>
            <option valor="action">Ação</option>
            <option valor="comedy">Comédia</option>
            <option valor="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.clickMe} value="">Adicionar filme</button>
      </form>
    );
  }
}


export default AddMovie;
