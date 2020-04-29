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
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.handleChangeInput}
            />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={subtitle}
              onChange={this.handleChangeInput}
            />
          </label>
          <label htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="imagePath"
              value={imagePath}
              onChange={this.handleChangeInput}
            />
          </label>
          <label htmlFor="storyline">
            Sinopse
            <textarea
              type="text"
              name="storyline"
              id="storyline"
              value={storyline}
              onChange={this.handleChangeInput}
            />
          </label>
          <label htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating"
              value={rating}
              onChange={this.handleChangeInput}
            />
          </label>
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
