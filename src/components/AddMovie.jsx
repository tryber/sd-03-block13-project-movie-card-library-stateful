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
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubtitleChange = this.onSubtitleChange.bind(this);
    this.onImagePathChange = this.onImagePathChange.bind(this);
    this.onStoryLineChange = this.onStoryLineChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onSubtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  onImagePathChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  onStoryLineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  onRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  onGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  onButtonClick(event) {
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

  render() {
    return (
      <div>
        <form>
          <label htmlFor="titulo"> Título
            <input type="text" value={this.title} onChange={this.onTitleChange} />
          </label>
          <label htmlFor="subtitulo"> Subtítulo
            <input type="text" value={this.subtitle} onChange={this.onSubtitleChange} />
          </label>
          <label htmlFor="imagePath"> Imagem
            <input type="text" value={this.imagePath} onChange={this.onImagePathChange} />
          </label>
          <label htmlFor="sinopse"> Sinopse
            <textarea value={this.storyline} onChange={this.onStoryLineChange} />
          </label>
          <label htmlFor="rating"> Avaliação
            <input type="number" value={this.rating} onChange={this.onRatingChange} />
          </label>
          <label htmlFor="genger"> Gênero
            <select id="genger" value={this.genre} onChange={this.onGenreChange} >
              {
                genreArray.map(({ text, value }) => (
                  <option key={text} value={value}>
                    {text}
                  </option>
                ))
              }
            </select>
          </label>
          <button type="submit" onClick={this.onButtonClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
export default AddMovie;
