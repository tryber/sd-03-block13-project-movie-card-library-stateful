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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.createInput = this.createInput.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  reset() {
    this.setState(initialState);
  }

  createInput(inputName, text, inputType, handler) {
    const st = this.state;
    return (
      <label htmlFor={inputName}>
        {text}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={st[inputName]}
          onChange={handler}
        />
      </label>
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form>
          <Input inputName="title" text="Título" input="text" handler={this.handleChangeInput} value={title} />
          <Input inputName="subtitle" text="Subtítulo" input="text" handler={this.handleChangeInput} value={subtitle} />
          <Input inputName="imagePath" text="Imagem" input="text" handler={this.handleChangeInput} value={imagePath} />
          <Input inputName="storyline" text="Sinopse" input="text" handler={this.handleChangeInput} value={storyline} />
          <Input inputName="rating" text="Avaliação" input="number" handler={this.handleChangeInput} value={rating} />
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
