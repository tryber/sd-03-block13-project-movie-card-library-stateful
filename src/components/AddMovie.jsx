import React, { Component } from 'react';

const selection = (selectedGenre, onSelectedGenreChange) => {
  const selectArr = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];
  return (
    <div>
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
    </div>
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

  onChange(value, name) {
    // const { value } = event.target;
    console.log(value);
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
        {input('text', 'Título', 'title', title, (e) => this.onChange(e.target.value, 'title'))}
        {input('text', 'Subtítulo', 'subtitle', subtitle, (e) => this.onChange(e.target.value, 'subtitle'))}
        {input('text', 'Imagem', 'imagePath', imagePath, (e) => this.onChange(e.target.value, 'imagePath'))}
        <label htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={(e) => this.onChange(e.target.value, 'storyline')}
          />
        </label>
        {input('number', 'Avaliação', 'rating', rating, (e) => this.onChange(
          Number(e.target.value), 'rating',
        ))}
        {selection(genre, (e) => this.onChange(e.target.value, 'genre'))}
        <button type="button" onClick={this.addMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
