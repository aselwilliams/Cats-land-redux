import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToLocal} from '../actions';
import { nanoid } from 'nanoid';


function FavoriteCats() {
  const [inputVal,setInputVal]=useState('');
const dispatch=useDispatch()

  const handleAdd=()=>{
    dispatch({
      type:addToLocal,
      payload:{id:nanoid(),text:inputVal}
    })
    setInputVal('');
  }
  return (
    <div className="third-column">
    <section className="input-container">
        <form onSubmit={handleAdd}>
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