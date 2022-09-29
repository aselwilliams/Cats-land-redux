import { addToLocal,deleteLocal, markLiked } from "../actions";
import * as actions from '../actions'

const CatsReducer=(state=[],action)=>{
    switch(action.type){
        case addToLocal:
        return [...state, action.payload]
        case deleteLocal:
            return state.filter((el)=>el.id!==action.payload)
        case markLiked:
            return state.map((item) =>
            item.id === action.payload ? { ...item, liked: !item.liked } : item
            );
    default:
        return state
    }
 
}
export default CatsReducer