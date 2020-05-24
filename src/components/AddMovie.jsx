import React, { Component } from 'react';

const genreArray = [
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class AddMovie extends Component {
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

    this.onStoryLineChange = this.onStoryLineChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
  }

  onStoryLineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  onRatingChange(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  onGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  onButtonClick() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState(event, name) {
    this.setState({ [name]: event.target.value });
  }

  createText(name, text, value) {
    return (
      <label htmlFor={name}>{text}
        <input
          type="text"
          value={value}
          onChange={(event) => this.changeState(event, name)} />
      </label>
    );
  }

  render() {
    return (
      <div>
        {this.createText('title', 'Título', this.state.title)}
        {this.createText('subtitle', 'Subtítulo', this.state.subtitle)}
        {this.createText('imagePath', 'Imagem', this.state.imagePath)}
        <label htmlFor="sinopse">Sinopse
          <textarea value={this.state.storyline} onChange={this.onStoryLineChange} />
        </label>
        <label htmlFor="rating">Avaliação
          <input type="number" value={this.state.rating} onChange={this.onRatingChange} />
        </label>
        <label htmlFor="genger">Gênero
          <select id="genger" value={this.state.genre} onChange={this.onGenreChange} >
            {
              genreArray.map(({ text, value }) => (
                <option key={text} value={value}>
                  {text}
                </option>
              ))
            }
          </select>
        </label>
        <button type="button" onClick={this.onButtonClick}>Adicionar filme</button>
      </div>
    );
  }
}
export default AddMovie;
