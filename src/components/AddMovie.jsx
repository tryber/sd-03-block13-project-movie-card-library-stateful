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

  /* Função genérica que gerencia a passagem de dados das caixas de texto
  para seu o estado correspondente no componente (state handler).
  Podia ter sido feito puxando direto a propriedade name do input, mas não passa no teste. */
  stHandler(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  /* Puxa o caminho obtido no botão de seleção de imagem e joga
  para a caixa de texto o caminho da imagem passando pelo estado do componente */
  pathToText(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  // É invocada ao clicar no botão de adicionar novo filme: chama a função
  // AddMovie no arquivo MovieLibrary.jsx e limpa o estado atual deste componente.
  exportMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(newMovie);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="formRegister">
        <legend>Cadastro de filmes</legend>
        <label htmlFor="text">Título</label>
        <input type="text" onChange={(evt) => this.stHandler(evt, 'title')} value={title} />
        <label htmlFor="text">Subtítulo</label>
        <input type="text" onChange={(evt) => this.stHandler(evt, 'subtitle')} value={subtitle} />
        <label htmlFor="text">Imagem</label>
        <input type="text" onChange={(e) => this.stHandler(e, 'imagePath')} value={imagePath} />
        <input type="file" onChange={this.pathToText} />
        <label htmlFor="text">Sinopse</label>
        <input type="text" onChange={(e) => this.stHandler(e, 'storyline')} value={storyline} />
        <label htmlFor="number">Avaliação</label>
        <input type="number" onChange={(evt) => this.stHandler(evt, 'rating')} value={rating} />
        <label htmlFor="select">Gênero</label>
        <select name="genre" onChange={(evt) => this.stHandler(evt, 'genre')} value={genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.exportMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
