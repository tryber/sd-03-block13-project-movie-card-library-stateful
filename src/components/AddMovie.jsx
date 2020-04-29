// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }



  render() {
    return (
      <div>
        <form className="movie-card" action="">

          <label htmlFor="title">Título</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <br/>
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />
          <br/>
          <label htmlFor="imagem">Imagem</label>
          <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.handleChange} />
          <br/>


        </form>

      </div>
    );
  }
}