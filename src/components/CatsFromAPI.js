import React from 'react'

function CatsFromAPI({apiCats}) {
  return (
    <section className="bg-color">
    <strong>Cats from API</strong>
    <a href="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10">(CLICK HERE)</a>
    <div className="api-container">
{apiCats.map((cat,index)=>{
    return(
        <div id="fetch-data" key={cat._id}>{index+1}. ${cat.text}</div>
    )
})}
        {/* <!-- <div id="fetch-data"></div> --> */}
    </div>
</section>
  )
}

export default CatsFromAPI