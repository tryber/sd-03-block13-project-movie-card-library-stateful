import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="titulo">
            Título
            <input type="text" id="titulo" name="title" onChange={this.handleChange} value={title} />
          </label>
          <label htmlFor="subtitulo">
            Subtítulo
            <input type="text" id="subtitulo" name="subtitle" onChange={this.handleChange} value={subtitle} />
          </label>
          <label htmlFor="imagem">
            Imagem
            <input type="text" id="imagem" name="imagePath" onChange={this.handleChange} value={imagePath} />
          </label>
          <label htmlFor="sinopse">
            Sinopse
            <textarea type="textarea" id="sinopse" name="storyline" onChange={this.handleChange} value={storyline} />
          </label>
          <label htmlFor="avaliacao">
            Avaliação
            <input type="number" id="avaliacao" name="rating" onChange={this.handleChange} value={rating} />
          </label>
          <label htmlFor="genero">
            Gênero
            <select type="text" id="genero" name="genre" onChange={this.handleChange} value={genre}>
              <option text="Ação" value="action">Ação</option>
              <option text="Comédia" value="comedy">Comédia</option>
              <option text="Suspense" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button type="button" value="Adicionar filme" onClick={this.handleClick}>Adicionar filme</button>
      </div>
    );
  }
}

export default AddMovie;
