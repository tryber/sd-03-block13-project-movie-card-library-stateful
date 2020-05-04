// implement AddMovie component here
import React, { Component } from 'react';

const stateInitial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = stateInitial;

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.addSelect = this.addSelect.bind(this);
    this.myFunction = this.myFunction.bind(this);
    this.addInput = this.addInput.bind(this);
  }

  handleChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
    if (name === 'rating') this.setState({ [name]: Number(value) });
  }

  myFunction() {
    // event.preventDefault();
    // console.log('estou no AddMovie. eu fui clicado, ass: Button', this.state);
    this.props.onClick(this.state);
    this.reset();
  }

  reset() {
    this.setState(stateInitial);
  }

  addInput(type, name, value, text) {
    return (
      <React.Fragment>
        <label htmlFor={name}>{text}</label>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          onChange={(event) => this.handleChange(event, name)}
        />
      </React.Fragment>
    );
  }

  addSelect() {
    const { genre } = this.state;
    return (
      <React.Fragment>
        <label htmlFor="genre">Gênero</label>
        <select name="genre" id="genre" onChange={(event) => this.handleChange(event, 'genre')} value={genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </React.Fragment>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div className="movie-card">
        <form>

          {this.addInput('text', 'title', title, 'Título')}

          {this.addInput('text', 'subtitle', subtitle, 'Subtítulo')}

          {this.addInput('text', 'imagePath', imagePath, 'Imagem')}

          <label htmlFor="storyline">Sinopse</label>
          <textarea
            name="storyline"
            value={storyline}
            onChange={(event) => this.handleChange(event, 'storyline')}
            id="storyline" cols="25" rows="3"
          />

          {this.addInput('number', 'rating', rating, 'Avaliação')}

          <br /><br />
          {this.addSelect()}

          <button type="button" onClick={this.myFunction}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
