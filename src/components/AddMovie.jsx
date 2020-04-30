import React from 'react';
import Input from './Input';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeInput = this.changeInput.bind(this);
    this.createInputs = this.createInputs.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
  }

  changeInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  reset() {
    this.setState(initialState);
  }

  createInputs() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <span>
        <Input name="title" text="Título" handler={this.changeInput} value={title} />
        <Input name="subtitle" text="Subtítulo" handler={this.changeInput} value={subtitle} />
        <Input name="imagePath" text="Imagem" handler={this.changeInput} value={imagePath} />
        <Input name="storyline" text="Sinopse" handler={this.changeInput} value={storyline} />
        <Input
          name="rating"
          text="Avaliação"
          input="number"
          handler={this.changeInput}
          value={rating}
        />
      </span>
    );
  }

  selectGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={this.handleChangeInput}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.createInputs()}
          {this.selectGenre()}
          <button
            type="button"
            value="Adicionar filme"
            onClick={() => {
              onClick(this.state);
              this.reset();
            }}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
