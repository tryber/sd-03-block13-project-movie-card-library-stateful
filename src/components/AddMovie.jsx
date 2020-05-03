// implement AddMovie component here
import React from 'react';

const newMovie = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = newMovie;
    this.exportMovie = this.exportMovie.bind(this);
    this.pathToText = this.pathToText.bind(this);
    this.stHandler = this.stHandler.bind(this);

  }

  // Função que gerencia a passagem de dados das caixas de texto para o estado correspondente (state handler)
  stHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Puxa o caminho obtido no botão de seleção de imagem e joga para a caixa de texto o caminho da imagem
  // passando pelo estado do componente
  pathToText(event) {
    const { value } = event.target;
    this.setState({imagePath: value});
  }

  // É invocada ao clicar no botão de adicionar novo filme: chama a função
  // AddMovie no arquivo MovieLibrary.jsx e limpa o estado atual deste componente.
  exportMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(newMovie);
  }

  render() {
    return (
      <form>
        <fieldset className="formRegister">
          <legend>Cadastro de filmes</legend>
            <label htmlFor="text">Título</label>
            <input type="text" name="title" onChange={this.stHandler} value={this.state.title} />
            <label htmlFor="text">Subtítulo</label>
            <input type="text" name="subtitle"
              onChange={this.stHandler} value={this.state.subtitle} />
            <label htmlFor="text">Imagem</label>
            <input type="text" name="imagePath"
              onChange={this.stHandler} value={this.state.imagePath} />
            <input type="file" name="selectFile" onChange={this.pathToText} />
            <label htmlFor="text">Sinopse</label>
            <input type="text" name="storyline"
              onChange={this.stHandler} value={this.state.storyline} />
            <label htmlFor="number">Avaliação</label>
            <input type="number" name="rating"
              onChange={this.stHandler} value={this.state.rating} />
            <label htmlFor="select">Gênero</label>
            <select name="genre" onChange={this.stHandler} value={this.state.genre}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          <button type="button" onClick={ this.exportMovie }>Adicionar filme</button>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;
