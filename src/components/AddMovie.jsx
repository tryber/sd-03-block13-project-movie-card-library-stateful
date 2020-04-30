import React from 'react';

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

const create = (tag, obj) => {
  if (tag === 'textarea') return <textarea {...obj} />;
  if (tag === 'select') return <select {...obj}>{setOptions(genreOptions)}</select>;
  else return <input {...obj} />;
}

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
      <form>
        {
          Object.entries(searchBoxes).map(([box, features]) => {
            const prop = Object.assign(
              features,
              { value: this.state[box], onChange: this.handleChange(box) });
            return (
              <label key={box} htmlFor={features.id}>{features.text}
                {create(features.type, prop)}
              </label>
            );
          })
        }
        <button type={'submit'} onClick={this.handleSubmitClick}>Adicionar filme</button>
      </form>
    );
  }
}
