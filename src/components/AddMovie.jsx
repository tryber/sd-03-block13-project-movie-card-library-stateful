import React from 'react';

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
    return (
      <div>
        <form>
          {this.createInput('title', 'Título', 'text', this.handleChangeInput)}
          {this.createInput('subtitle', 'Subtítulo', 'text', this.handleChangeInput)}
          {this.createInput('imagePath', 'Imagem', 'text', this.handleChangeInput)}
          {this.createInput('storyline', 'Sinopse', 'text', this.handleChangeInput)}
          {this.createInput('rating', 'Avaliação', 'number', this.handleChangeInput)}
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
