// implement AddMovie component here
import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }
  onChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { onClick } = this.props;
    const addMovie = () => {
      onClick(this.state);
      this.setState({
        title: "",
        subtitle: "",
        imagePath: "",
        storyline: "",
        rating: 0,
        genre: "action",
      });
    };
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <fieldset>
        <label>
          Título
          <input name="title" value={title} onChange={this.onChange} />
        </label>
        <label>
          Subtítulo
          <input name="subtitle" value={subtitle} onChange={this.onChange} />
        </label>
        <label>
          Imagem
          <input name="imagePath" value={imagePath} onChange={this.onChange} />
        </label>
        <label>
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.onChange}
          />
        </label>
        <label>
          Avaliação
          <input
            name="rating"
            value={rating}
            onChange={this.onChange}
            type="number"
          />
        </label>
        <select name="genre" onChange={this.onChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={addMovie}>Adicionar filme</button>
      </fieldset>
    );
  }
}

export default AddMovie;
