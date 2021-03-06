import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addToLocal,deleteFav} from '../actions';
import { nanoid } from 'nanoid';
import {store} from '../index'
import * as actions from '../actions';
import { FaRegTrashAlt} from 'react-icons/fa'


function FavoriteCats() {
  const [inputVal,setInputVal]=useState('');

  const dispatch=useDispatch()
 const favFacts=useSelector((state)=>state.favFacts)

console.log(favFacts, 'favFacts')

  const handleAdd=(e)=>{
    e.preventDefault()
 const newCat={id: nanoid(), text:inputVal}
 dispatch({type:addToLocal, payload:newCat})
    setInputVal('');
  }

  const handleDeleteFav=(id)=>{
dispatch({
  type: deleteFav, payload: id
})
  }
  console.log(store.getState())
  return (
    <div className="third-column">
    <section className="input-container">
        <form onSubmit={handleAdd}>
            <input value={inputVal} type="text" id="input-fact" placeholder="Add Cats Facts" onChange={(e)=>setInputVal(e.target.value)}/>
            <button type='submit' id="add-btn">ADD</button>
        </form>
    </section>
    <section id="favCats" className="bg-color">
        <strong>Favorite Facts</strong>
        <div className="fav-container">
        {favFacts.map((item,k)=>{
             return  <div class="local-cat" key={item.id}>
             {k+1}. {item.text}
                 <div class="btn-wrappper">
                     <button id="remove-btn" className="btn btn-danger" onClick={()=>handleDeleteFav(item.id)}>
                         <FaRegTrashAlt />
                     </button>
                 </div>
             </div>
           })} 
        </div>
    </section>
</div>
  )
}

export default FavoriteCats