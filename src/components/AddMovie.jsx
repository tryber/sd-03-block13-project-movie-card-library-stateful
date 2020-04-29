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
    this.alteraTitulo = this.alteraTitulo.bind(this);
    this.alteraSubtitulo = this.alteraSub.bind(this);
    this.alteraImagem = this.alteraImagem.bind(this);
    this.alteraStory = this.altsto.bind(this);
    this.alteraRating = this.alteraRat.bind(this);
    this.resetaState = this.resetaState.bind(this);
  }

  alteraTitulo(event) {
    this.setState({ title: event.target.value });
  }

  alteraSub(event) {
    this.setState({ subtitle: event.target.value });
  }

  alteraImagem(event) {
    this.setState({ imagePath: event.target.value });
  }

  altsto(event) {
    this.setState({ storyline: event.target.value });
  }

  alteraRat(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  alteraSelectGenre(event) {
    this.setState({ genre: event.target.value });
  }

  currentState(props) {
    this.setState(props.AddMovie);
  }

  resetaState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" value={this.state.title} onChange={this.alteraTitulo} id="titulo" />
        <label htmlFor="subtitulo">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.alteraSub} id="subtitulo" />
        <label htmlFor="imag">Imagem</label>
        <input type="text" value={this.state.imagePath} onChange={this.alteraImagem} name="imag" />
        <label htmlFor="sinops">Sinopse</label>
        <textarea type="text" value={this.state.storyline} onChange={this.altsto} name="sinops" />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" value={this.state.rating} onChange={this.alteraRat} name="avaliacao" />
        <label htmlFor="genero">
        Gênero
        </label>
        <select value={this.state.genre} onChange={this.alteraSelectGenre} name="genero">
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.resetaState}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
