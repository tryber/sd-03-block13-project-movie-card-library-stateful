import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChangeInput(event, stateElem) {
    const { value } = event.target;

    this.setState({ [stateElem]: (stateElem === 'rating' ? Number(value) : value) });
  }

  addSelect() {
    return (
      <select
        value={this.state.genre}
        onChange={this.handleChangeInput}
        name="genre"
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }

  addMovie(event) {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  title() {
    const { title } = this.state;
    return (

      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'title')}
            value={title}
          />
        </label>
      </div>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (

      <div>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'subtitle')}
            value={subtitle}
          />
        </label>
      </div>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (

      <div>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'imagePath')}
            value={imagePath}
          />
        </label>
      </div>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (

      <div>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'storyline')}
            value={storyline}
          />
        </label>
      </div>
    );
  }

  rating() {
    const { rating } = this.state;
    return (

      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            onChange={(event) => this.handleChangeInput(event, 'rating')}
            value={rating}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="form-movie">
        {this.title()}
        {this.subtitle()}
        {this.imagePath()}
        {this.storyline()}
        <label htmlFor="genre">
          Gênero
          {this.addSelect()}
        </label>
        <button type="submit" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
