import React from 'react';

class AddMovie extends React.Component {
  constructor (props) {
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
  updateState = (event) => {
    const { value } = event.target;
    this.setState(
      {
        subtitle: value,
        title: value,
        imagePath: value,
        storyline: value,
        rating: parseFloat(value),
        genre: value,
      }
    );
  };

  clicando = () => {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    // const {onClick} = this.props;
    return (
      <div>
        <form>
          <label htmlFor="title">Título<input onChange={this.updateState}
            type="text" id="title" value={this.state.title} /></label>

          <label htmlFor="subtitle">Subtítulo<input onChange={this.updateState}
            type="text" id="subtitle" value={this.state.subtitle} /></label>

          <label htmlFor="image">Imagem<input onChange={this.updateState}
            type="text" id="image" value={this.state.imagePath} /></label>
          <label>Sinopse<textarea value={this.state.storyline} onChange={this.updateState}></textarea></label>

          <label htmlFor="rating">Avaliação<input type="number" id="rating" value={this.state.rating}
          onChange={this.updateState} /></label>

          <label htmlFor="gender">Gênero<select id="gender" value={this.state.genre} onChange={this.updateState}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select></label>
          <button type="button" onClick={this.clicando}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;