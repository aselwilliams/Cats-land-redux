import Header from './components/Header'
import CatsFromAPI from './components/CatsFromAPI';
import LocalCats from './components/LocalCats';
import FavoriteCats from './components/FavoriteCats';
import {useState, useEffect} from 'react'

function App() {
  return (
  <div className='main-container'>
    <Header />
    <main>
      <CatsFromAPI />
      <LocalCats />
      <FavoriteCats />
    </main>


  </div>
  );
}

export default App;
