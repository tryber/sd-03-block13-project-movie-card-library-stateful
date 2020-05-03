// implement AddMovie component here
import React, { Component } from 'react';

const selection = (selectedGenre, onSelectedGenreChange) => {
  const selectArr = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];
  return (
    <>
      <label htmlFor="genre">
      Gênero
        <select
          id="genre"
          name="genre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          {selectArr.map((option) => (
            <option key={option[0]} value={option[0]}>
              {option[1]}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
const input = (type, innerText, name, value, onChange) => (
  <div>
    <label htmlFor={name}>
      {innerText}
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </label>
  </div>
);
class AddMovie extends Component {
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
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>

        {input('text', 'Título', 'title', title, this.onChange)}
        {input('text', 'Subtítulo', 'subtitle', subtitle, this.onChange)}
        {input('text', 'Imagem', 'imagePath', imagePath, this.onChange)}
        <label htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.onChange}
          />
        </label>
        {input('number', 'Avaliação', 'rating', rating, this.onChange)}
        {selection(genre, this.onChange)}
        <button type="button" onClick={this.addMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
