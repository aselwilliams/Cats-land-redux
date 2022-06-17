import Header from './components/Header'


function App() {
  return (
  <div className='main-container'>
    <Header />
    <main>
       <section className="bg-color">
            <strong>Cats from API</strong>
            <a href="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10">(CLICK HERE)</a>
            <div className="api-container">
                {/* <!-- <div id="fetch-data"></div> --> */}
            </div>
       </section>
       <section className="bg-color">
            <strong>Local Cats</strong>(add a cat fact <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>)
          <div className="local-container">
                {/* <!-- <div className="local-cat"></div> --> */}
          </div>
       </section>
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
