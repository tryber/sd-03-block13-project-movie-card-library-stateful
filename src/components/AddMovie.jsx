import React, { Component } from 'react';
// import MovieList from './MovieList';


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
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const addmovie = () => {
      onClick(this.state);
      this.setState({ subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action' });
    };
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <label htmlFor>
          Título
          <input type="text" name="title" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor>
          Subtítulo
          <input type="text" name="subtitle" value={subtitle} onChange={this.handleChange} />
        </label>
        <label htmlFor>
          ImagePath
          <input type="text" name="imagePath" value={imagePath} onChange={this.handleChange} />
        </label>
        <label htmlFor>
          Sinopse
          <textarea type="text" name="storyline" value={storyline} onChange={this.handleChange} />
        </label>
        <label htmlFor>
          Avaliação
          <input type="number" name="rating" value={rating} onChange={this.handleChange} />
        </label>
        <select name="genre" value={genre}>
          Gênero
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={addmovie}>Adicionar Filme</button>
      </div>
    );
  }
}
