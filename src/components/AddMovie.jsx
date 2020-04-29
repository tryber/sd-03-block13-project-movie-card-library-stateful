import React from './react';

class AddMovie extends React.Component {
  constructor(props) {
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

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  onChangeImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  render() {
    /* const onClick = this.props.onClick; */
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.onChangeSubtitle} />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input type="text" value={this.state.imagePath} onChange={this.onChangeImagePath} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
