import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MovieLibrary movies={movies} />
      </div>
    </div>
  );
}

export default App;
