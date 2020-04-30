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
    this.passaState = this.passaState.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  alteraAvaliacao(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  passaState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  someForms() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Título
          <input type="text" onChange={this.changeHandler} value={title} name="title" />
        </label>
        <label htmlFor="input">
          Subtítulo
          <input type="text" value={subtitle} name="subtitle" onChange={this.changeHandler} />
        </label>
        <label htmlFor="input">
          Imagem
          <input type="text" value={imagePath} name="imagePath" onChange={this.changeHandler} />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.passaState}>
        {this.someForms()}
        <label htmlFor="storyLine">Sinopse</label>
        <textarea name="storyLine" value={this.state.storyLine} onChange={this.changeHandler} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" value={this.state.rating} name="rating" onChange={this.alteraAvaliacao} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} name="genre" onChange={this.changeHandler}>
          <option value="action">Ação</option><option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select> <button onClick={this.passaState}>Adicionar filme</button></form>
    );
  }
}

export default AddMovie;
