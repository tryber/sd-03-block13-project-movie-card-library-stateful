import React from "react";
import MovieLibrary from "./components/MovieLibrary";
import Data from "./data";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={Data} />
      </div>
    );
  }
}

export default App;
