import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div>
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
