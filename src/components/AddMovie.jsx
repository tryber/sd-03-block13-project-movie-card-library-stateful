// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

    /* this.changeHandler = this.changeHandler.bind(this);
    this.passaState = this.passaState.bind(this); */

/*     this.alteraTitulo = this.alteraTitulo.bind(this);
    this.alteraSubtitulo = this.alteraSubtitulo.bind(this);
    this.alteraImagem = this.alteraImagem.bind(this);
    this.alteraSinopse = this.alteraSinopse.bind(this);
    this.alteraRating = this.alteraRating.bind(this);
    this.alteraGenero = this.alteraGenero.bind(this);
    this.passaState = this.passaState.bind(this); */

  changeHandler = event => {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  alteraAvaliacao = event => {
    this.setState({
      rating: parseFloat(event.target.value),
    });
  }

  passaState() {
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
        <label htmlFor="titulo">Avaliação</label>
        <input type="text" name="titulo" value={this.state.title} onChange={this.changeHandler} />
        <label htmlFor="subtitulo">Avaliação</label>
        <input type="text" name="subtitulo" value={this.state.subtitle} onChange={this.changeHandler} />
        <label htmlFor="imagem">Avaliação</label>
        <input type="text" name="imagem" value={this.state.imagePath} onChange={this.changeHandler} />
        <label htmlFor="sinopse">Avaliação</label>
        <textarea name="imagem" value={this.state.storyLine} onChange={this.changeHandler} />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" name="avaliacao" value={this.state.rating} onChange={this.alteraAvaliacao} />
        <label htmlFor="genero">Gênero</label>
        <select name="genero" value={this.state.genre} onChange={this.changeHandler}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.passaState}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
