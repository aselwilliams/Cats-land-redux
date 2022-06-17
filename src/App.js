import Header from './components/Header'
import CatsFromAPI from './components/CatsFromAPI';
import LocalCats from './components/LocalCats';
import FavoriteCats from './components/FavoriteCats';
import {useState, useEffect} from 'react'
import axios from 'axios';
const animal = "cat"; //dog, horse
const catsURL = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=`;
const amount = 15;

function App() {
const [localCats,setLocalCats]=useState([])

useEffect(()=>{
  axios.get(catsURL).then((res)=>setLocalCats(res.data))
},[])
  return (
  <div className='main-container'>
    <Header />
    <main>
      <CatsFromAPI localCats={localCats}/>
      <LocalCats />
      <FavoriteCats />
    </main>


  </div>
  );
}

export default App;
