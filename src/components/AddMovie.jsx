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
  }

  insertTitle(value) {
    this.setState((state) => ({ title: `${state.title}${value}` }));
  }

  insertSubtitle(value) {
    this.setState((state) => ({ subtitle: `${state.subtitle}${value}` }));
  }

  insertStoryline(value) {
    this.setState((state) => ({ storyline: `${state.storyline}${value}` }));
  }

  insertRating(value) {
    this.setState((state) => ({ rating: state.rating + value }));
  }

  changeGenreType(value) {
    this.setState({ genre: value });
  }

  // clickToAdd() {

  // }

  render() {
    const {
      title, onTitleChange, subtitle, onSubtitleChange,
      storyline, onStoryLineChange, rating, onRatingChange, genre, onGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="title">Título
        <input type="text" id="title" value={title} onChange={onTitleChange} />
        </label>
        <label htmlFor="subtitle">Subtítulo
        <input type="text" id="subtitle" value={subtitle} onChange={onSubtitleChange} />
        </label>
        <label htmlFor="storyline">Sinopse
        <textarea type="text" id="storyline" value={storyline} onChange={onStoryLineChange} />
        </label>
        <label htmlFor="rating">Avaliação
        <input type="number" id="rating" value={rating} onChange={onRatingChange} />
        </label>
        <label htmlFor="genre">Gênero
        <select id="genre" value={genre} onChange={onGenreChange} />
          <option key="Ação" value="action">Ação</option>
          <option key="Comédia" value="comedy">Comédia</option>
          {/* <option key="Suspense" value="thriller">Suspense</option> */}
        </label>
        {/* <button type="button" onClick={() => clickToAdd()} >Adicionar filme</button> */}
      </form>
    );
  }
}

export default AddMovie;
