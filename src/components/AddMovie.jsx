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

  insertTitle(event) {
    this.setState({ title: event.target.value });
  }

  insertSubt(event) {
    this.setState({ subtitle: event.target.value });
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
    const { storyline, onStoryChange, rating, onRatingChange, genre, onGenreChange } = this.props;

    return (
      <form>
        <label htmlFor="title">Título
        <input type="text" id="title" value={this.state.title} onChange={this.insertTitle} />
        </label>
        <label htmlFor="subtitle">Subtítulo
        <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.insertSubt} />
        </label>
        <label htmlFor="storyline">Sinopse
        <textarea type="text" id="storyline" value={storyline} onChange={onStoryChange} />
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
