import React from "react";

class AddMovie extends React.Component {
  createInput(text, id, type, value, callback) {
    return (
      <div>
        <label htmlFor={id}>{text}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={(event, id) => callback(event, id)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.createInput("Título", "title", "text", searchText, onSearchTextChange)}
        </form>
      </div>
    );
  }
}

export default AddMovie;
