import Header from "./components/Header";
import CatsFromAPI from "./components/CatsFromAPI";
import LocalCats from "./components/LocalCats";
import FavoriteCats from "./components/FavoriteCats";
import { useState, useEffect } from "react";
import axios from "axios";
const animal = "cat"; //dog, horse
const catsURL = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=15`;

function App() {
  const [apiCats, setApiCats] = useState([]);

  useEffect(() => {
    axios.get(catsURL).then((res) => setApiCats(res.data));
  }, []);

  const alert = document.getElementById("alert-msg");
  function display_alert(text, classType) {
    alert.classList.add(classType);
    alert.innerText = text;
    alert.style.visibility = "visible";

    setTimeout(() => {
      alert.classList.remove(classType);
      alert.style.visibility = "hidden";
    }, 4000);
  }

  return (
    <div className="main-container">
      <Header />
      <main>
        <CatsFromAPI apiCats={apiCats} />
        <LocalCats display_alert={display_alert} />
        <FavoriteCats display_alert={display_alert} />
      </main>
    </div>
  );
}

export default App;
