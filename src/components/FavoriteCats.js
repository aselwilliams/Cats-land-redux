import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addToLocal} from '../actions';
import { nanoid } from 'nanoid';
import LocalCats from './LocalCats';


function FavoriteCats() {
  const [inputVal,setInputVal]=useState('');
  const [localCats,setLocalCats]=useState([])
  const dispatch=useDispatch()
 const addToLocal=useSelector((state)=>state.addToLocal)

  const handleAdd=(e)=>{
    e.preventDefault()
 const newCat={id: nanoid, text:inputVal}
 dispatch(()=>addToLocal(newCat))
    setInputVal('');
  }
  
  return (
    <div className="third-column">
    <section className="input-container">
        <form onSubmit={handleAdd}>
            <input value={inputVal} type="text" id="input-fact" placeholder="Add Cats Facts" onChange={(e)=>setInputVal(e.target.value)}/>
            <button id="add-btn">ADD</button>
        </form>
    </section>
    <section id="favCats" className="bg-color">
        <strong>Favorite Facts</strong>
        <div className="fav-container">
       {addToLocal}
                {/* <!-- <div className="fav-fact"></div> --> */}
        </div>
    </section>
</div>
  )
}

export default FavoriteCats