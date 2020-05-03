import React, { Component } from 'react';
// import MovieList from './MovieList';


export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'action',
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.adicionarfilme = this.adicionarfilme.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    console.log(this.state);
  }

  adicionarfilme() {
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
    console.log(this.state);
  }

  titleForm() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  subtitleForm() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  imageForm() {
    const { imagePath } = this.state;

    return (
      <div>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  storylineForm() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  ratingForm() {
    const { rating } = this.state;

    return (
      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <form>
        {this.titleForm()}
        {this.subtitleForm()}
        {this.imageForm()}
        {this.storylineForm()}
        {this.ratingForm()}
        <label htmlFor="genre">
          Gênero
          <select id="genre" value={genre} onChange={this.handleChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.adicionarfilme}>Adicionar filme</button>
      </form>
    );
  }
}
