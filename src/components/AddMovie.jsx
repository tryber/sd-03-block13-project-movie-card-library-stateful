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
        <label htmlFor="title">Título</label>
        <input type="text"value={this.state.title} onChange={this.changeHandler} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.changeHandler} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" value={this.state.imagePath} onChange={this.changeHandler} />
        <label htmlFor="storyLine">Sinopse</label>
        <textarea value={this.state.storyLine} onChange={this.changeHandler} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" value={this.state.rating} onChange={this.alteraAvaliacao} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={this.changeHandler}>
          <option value="action">Ação</option><option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select> <button onClick={this.passaState}>Adicionar filme</button></form>
    );
  }
}

export default AddMovie;
