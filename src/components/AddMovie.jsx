import React from 'react';
import genres from '../genreData';

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
    
    this.insertTitle = this.insertTitle.bind(this);
    this.insertSubt = this.insertSubt.bind(this);
    this.insertStory = this.insertStory.bind(this);
    this.insertRating = this.insertRating.bind(this);
    this.changeGenreType = this.changeGenreType.bind(this);
    this.clickToAdd = this.clickToAdd.bind(this);
  }

  insertTitle(event) {
    this.setState({ title: event.target.value });
  }

  insertSubt(event) {
    this.setState({ subtitle: event.target.value });
  }

  insertStory(event) {
    this.setState({ storyline: event.target.value });
  }

  insertRating(event) {
    this.setState({ rating: event.target.value });
  }

  changeGenreType(event) {
    this.setState({ genre: event.target.value });
  }

  clickToAdd(event) {
    if (event && event.preventDefault) event.preventDefault();
    this.props.onClick(this.state);
  }

  render() {
    const genreAdd = genres.slice(1, 4);

    return (
      <form>
        <label htmlFor="title">Título
        <input type="text" id="title" value={this.state.title} onChange={this.insertTitle} />
        </label>
        <label htmlFor="subtitle">Subtítulo
        <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.insertSubt} />
        </label>
        <label htmlFor="stor">Sinopse
        <textarea type="text" id="stor" value={this.state.storyline} onChange={this.insertStory} />
        </label>
        <label htmlFor="rating">Avaliação
        <input type="number" id="rating" value={this.state.rating} onChange={this.insertRating} />
        </label>
        <label htmlFor="genre">Gênero
        <select id="genre" value={this.state.genre} onChange={this.changeGenreType} />
          {genreAdd.map((genre) => (
            <option key={genre.value} value={genre.value}>{genre.option}</option>
          ))}
        </label>
        <button type="submit" onClick={this.clickToAdd} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
