import React from 'react'

function FavoriteCats() {
  return (
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
  )
}

export default FavoriteCats