// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.addSelect = this.addSelect.bind(this);
    this.myFunction = this.myFunction.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  myFunction() {
    // event.preventDefault();
    // console.log('estou no AddMovie. eu fui clicado, ass: Button', this.state);
    this.props.onClick(this.state);
    this.reset();
  }

  reset() {
    this.setState({ ...this.state });
  }

  addInput(type, name, value, onChange, text) {
    return (
    <React.Fragment>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} value={value} id={name} onChange={onChange} />
    </React.Fragment>
    )
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

          {this.addInput("text", "title", title, this.handleChange, "Título")}

          {/* <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={title} onChange={this.handleChange} /> */}

          {/* <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" id="subtitle"
          value={subtitle} onChange={this.handleChange}
          /> */}

          {this.addInput("text", "subtitle", subtitle, this.handleChange, "Subtítulo")}

          {this.addInput("text", "imagePath", imagePath, this.handleChange, "Imagem")}

          {/* <label htmlFor="imagePath">Imagem</label>
          <input type="text" name="imagePath" id="imagePath" value={imagePath} onChange={this.handleChange} /> */}

          <label htmlFor="storyLine">Sinopse</label>
          <textarea
            name="storyLine"
            value={storyline}
            onChange={this.handleChange}
            id="storyLine" cols="25" rows="3"
          />

          <label htmlFor="rating">Avaliação</label>
          <input type="number" name="rating" id="rating" value={rating} onChange={this.handleChange} />
          <br /><br />
          {this.addSelect()}

          <button type="button" onClick={this.myFunction}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
