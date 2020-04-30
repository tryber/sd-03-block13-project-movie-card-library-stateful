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
    this.changeHandler = this.changeHandler.bind(this);
    this.alteraAvaliacao = this.alteraAvaliacao.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  alteraAvaliacao(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  passaState() {
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

  render() {
    return (
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" 
          name="titulo" value={this.state.title} onChange={this.changeHandler} />
        <label htmlFor="subtitulo">Subtítulo</label>
        <input type="text" name="subtitulo"
        value={this.state.subtitle}
          onChange={this.changeHandler} />
        <label htmlFor="imagem">Imagem</label>
        <input type="text" name="imagem" value={this.state.imagePath}
          onChange={this.changeHandler} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea name="imagem" value={this.state.storyLine}
          onChange={this.changeHandler} />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" name="avaliacao" value={this.state.rating}
          onChange={this.alteraAvaliacao} />
        <label htmlFor="genero">Gênero</label>
        <select name="genero" value={this.state.genre} onChange={this.changeHandler}>
          <option value="action">Ação</option><option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select> <button onClick={this.passaState}>Adicionar filme</button></form>
    );
  }
}

export default AddMovie;
