import Header from './components/Header'
import CatsFromAPI from './components/CatsFromAPI';
import LocalCats from './components/LocalCats';

function App() {
  return (
  <div className='main-container'>
    <Header />
    <main>
  <CatsFromAPI />
  <LocalCats />
       <div className="third-column">
            <section className="input-container">
                <form action="#">
                    <input type="text" id="input-fact" placeholder="Add Cats Facts"/>
                    <button id="add-btn">ADD</button>
                </form>
            </section>
            <section id="favCats" className="bg-color">
                <strong>Favorite Facts</strong>
                <div className="fav-container">
                        {/* <!-- <div className="fav-fact"></div> --> */}
                </div>
            </section>
    </div>
    </main>


  </div>
  );
}

export default App;
