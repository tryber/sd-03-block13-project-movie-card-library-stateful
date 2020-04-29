import React, { Component } from 'react';


export default class AddMovie extends Component {
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
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.SubmitMovie = this.SubmitMovie.bind(this);
  }

  onChangeHandler(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  SubmitMovie() {
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

  tituloLabel() {
    const { title } = this.state;
    return (

      <label htmlFor="input">
        Título
        <input type="text" value={title} id="title" onChange={this.onChangeHandler} />
      </label>


    );
  }

  subtituloLabel() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="input">
        Subtítulo
        <input type="text" value={subtitle} id="subtitle" onChange={this.onChangeHandler} />
      </label>
    );
  }

  imagemLabel() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="input">
        Imagem
        <input type="text" value={imagePath} id="imagePath" onChange={this.onChangeHandler} />
      </label>
    );
  }


  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <form>
        {this.tituloLabel()}
        {this.subtituloLabel()}
        {this.imagemLabel()}
        <label htmlFor="input">
          Sinopse
          <textarea value={storyline} id="storyline" onChange={this.onChangeHandler} />
        </label>
        <label htmlFor="input">
          Avaliação
          <input type="number" value={rating} id="rating" onChange={this.onChangeHandler} />
        </label>
        <label htmlFor="input">
          Gênero
          <select value={genre} id="genre" onChange={this.onChangeHandler}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.SubmitMovie}>Adicionar filme</button>


      </form>

    );
  }
}
