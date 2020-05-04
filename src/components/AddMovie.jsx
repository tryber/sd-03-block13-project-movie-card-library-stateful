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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChangeInput(event, stateElem) {
    const { value } = event.target;

    this.setState({ [stateElem]: (stateElem === 'rating' ? Number(value) : value) });
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
    // event.preventDefault();
  }

  title() {
    const { title } = this.state;
    return (

      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'title')}
            value={title}
          />
        </label>
      </div>
    );
  }

 
  render() {
<<<<<<< HEAD
    const { title, subtitle, imagePath, storyLine, rating } = this.state;
    return (
      <div className="movie-card">
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />

          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" id="subtitle" value={subtitle} onChange={this.handleChange} />

          <label htmlFor="imagePath">Imagem</label>
          <input type="text" name="imagePath" id="imagePath" value={imagePath} onChange={this.handleChange} />

          <label htmlFor="storyLine">Sinopse</label>
          <textarea
            name="storyLine"
            value={storyLine}
            onChange={this.handleChange}
            id="storyLine" cols="25" rows="3"
          />

          <label htmlFor="rating">Avaliação</label>
          <input type="number" name="rating" id="rating" value={rating} onChange={this.handleChange} />
          <br /><br />
          {this.addSelect()}

          <button type="button" onClick={this.myFunction}>Adicionar filme</button>
        </form>
      </div>
=======
    return (
      <form className="form-movie">
        {this.title()}
        <button type="button" onClick={this.addMovie}>Adicionar filme</button>
      </form>
>>>>>>> dd3b15b0b8841a2ed5904c42f94ee7443d46b79c
    );
  }
}

export default AddMovie;
