import React from 'react';

import './AddMovie.css';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};

const searchBoxes = {
  title: { id: 'title', text: 'Título', type: 'text' },
  subtitle: { id: 'subtitle', text: 'Subtítulo', type: 'text' },
  imagePath: { id: 'image', text: 'Imagem', type: 'text' },
  storyline: { id: 'storyline', text: 'Sinopse', type: 'textarea' },
  rating: { id: 'rating', text: 'Avaliação', type: 'number' },
  genre: { id: 'genre', text: 'Gênero', type: 'select' },
};

const genreOptions = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];

const setOptions = (opts) => opts.map(([en, pt]) => <option value={en} key={en}>{pt}</option>);

const create = (tag, props) => {
  if (tag === 'textarea') return <textarea {...props} />;
  if (tag === 'select') return <select {...props} className={'select'}>{setOptions(genreOptions)}</select>;
  return <input {...props} />;
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (({ target: { value } }) => {
      const nextState = {};

      if (name === 'rating') nextState[name] = Number(value);
      else nextState[name] = value;

      this.setState(nextState);
    });
  }

  reset() { this.setState(initialState); }

  handleSubmitClick() {
    this.props.onClick(this.state);
    this.reset();
  }

  render() {
    return (
      <form className={'forms-add'}><h3>Adicione um filme</h3>
        {
          Object.entries(searchBoxes).map(([box, features]) => {
            const props = Object.assign(
              features,
              { value: this.state[box], onChange: this.handleChange(box) });
            return (
              <label key={box} htmlFor={features.id} className={'flex-label'}>{features.text}
                {create(features.type, props)}
              </label>
            );
          })
        }
        <button type={'submit'} onClick={this.handleSubmitClick} className={'submit-add-buttom'}>
          Adicionar filme
        </button>
      </form>
    );
  }
}
