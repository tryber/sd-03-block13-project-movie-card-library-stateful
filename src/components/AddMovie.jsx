import React from 'react';

class AddMovie extends React.Component {
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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" method="get">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={subtitle}
          onChange={(event) => this.setState({ subtitle: event.target.value })}
        />
        <label htmlFor="imagePath">Imagem</label>
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={imagePath}
          onChange={(event) => this.setState({ imagePath: event.target.value })}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={storyline}
          onChange={(event) => this.setState({ storyline: event.target.value })}
        />
        <label htmlFor="rating">Avaliação</label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={rating}
          onChange={(event) => this.setState({ rating: Number(event.target.value) })}
        />
        <label htmlFor="genre">Gênero</label>
        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(event) => this.setState({ genre: event.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick="">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
