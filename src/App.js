import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MoviesList from './data';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar />
      </div>
      <MovieList movies={MoviesList} />
    </div>
  );
};

export default App;
