import React, { Component } from 'react';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return ({ target: { value } }) => {
      const nextState = {};
      if (name === 'rating') nextState[name] = Number(value);
      else nextState[name] = value;

      this.setState(nextState);
    };
  }

  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange("title")}
            value={this.state.title}
          />
          <br />
          <label htmlFor="sub">Subtítulo</label>
          <input
            type="text"
            name="subtitle"
            id="sub"
            onChange={this.handleChange("subtitle")}
            value={this.state.subtitle}
          />
          <br />
          <label htmlFor="img">Imagem</label>
          <input
            type="text"
            alt="teste"
            name="image"
            id="img"
            onChange={this.handleChange("imagePath")}
            value={this.state.imagePath}
          />
          <br />
          <label htmlFor="sin">Sinopse</label>
          <textarea
            type="textarea"
            name="storyline"
            id="sin"
            onChange={this.handleChange("storyline")}
            value={this.state.storyline}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default AddMovie;
