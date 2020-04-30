import React from 'react';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};

const features = {
  title: { id: 'title', text: 'Título', type: 'text' },
  subtitle: { id: 'subtitle', text: 'Subtítulo', type: 'text' },
  imagePath: { id: 'image', text: 'Imagem', type: 'text' },
  rating: { id: 'rating', text: 'Avaliação', type: 'number' },
};

const genreOptions = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (({ target: { value } }) => {
      const nextState = {}
      if (name === 'rating') nextState[name] = Number(value);
      else nextState[name] = value;
      this.setState(nextState);
    });
  }

  reset() { this.setState(initialState); }

  createInput({ id, text, type, value, onChange }) {
    return (
      <label htmlFor={id}>{text}
        <input type={type} value={value} id={id} onChange={this.handleChange(onChange)} />
      </label>
    );
  }

  handleSubmitClick() {
    this.props.onClick(this.state);
    this.reset();
  }

  createGender(genre) {
    return (
      <label htmlFor={'genre'}>Gênero
        <select onChange={this.handleChange('genre')} id={'genre'} value={genre}>
          {genreOptions.map(([en, pt]) => <option value={en} key={en}>{pt}</option>)}
        </select>
      </label>
    );
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    return (
      <form>
        {this.createInput({ ...features.title, value: title, onChange: 'title' })}
        {this.createInput({ ...features.subtitle, value: subtitle, onChange: 'subtitle' })}
        {this.createInput({ ...features.imagePath, value: imagePath, onChange: 'imagePath' })}
        <label htmlFor="storyline">
          <textarea value={storyline} id={'storyline'} onChange={this.handleChange('storyline')}>
          Sinopse</textarea>
        </label>
        {this.createInput({ ...features.rating, value: rating, onChange: 'rating' })}
        {this.createGender(genre)}
        <button type={'submit'} onClick={this.handleSubmitClick}>Adicionar filme</button>
      </form>
    );
  }
}
