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
  updateState = (e) => {
    const { value } = e.target;
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
          <label>Título<input onChange={this.updateState}
            type="text" value={this.state.title} /></label>

          <label>Subtítulo<input onChange={this.updateState}
            type="text" value={this.state.subtitle} /></label>

          <label>Imagem<input onChange={this.updateState}
            type="text" value={this.state.imagePath} /></label>
          <label>Sinopse<textarea value={this.state.storyline} onChange={this.updateState}></textarea></label>

          <label>Avaliação<input type="number" value={this.state.rating} onChange={this.updateState} /></label>

          <label>Gênero<select value={this.state.genre} onChange={this.updateState}>
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