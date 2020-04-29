// implement AddMovie component here
import React from 'react';

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

  render() {
    return (
      <div>
        <form>
          <p>Form</p>
          <label htmlFor="title">
            Título
            <input type="text" name="title" id="title" value={this.state.title} onChange={} />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input type="text" name="subtitle" id="subtitle" value={this.state.subtitle} onChange={} />
          </label>
          <label htmlFor="movie-image">
            <input type="file" name="movie-image" id="movie-image" value={this.state.imagePath} onChange={} />
          </label>

        </form>
      </div>
    );
  }
}

export default AddMovie;
