import { addToLocal,deleteLocal } from "../actions";
import * as actions from '../actions'

const CatsReducer=(state=[],action)=>{
    switch(action.type){
        case addToLocal:
        return [...state, action.payload]
        case deleteLocal:
            return state.filter((el)=>el.id!==action.payload)
    default:
        return state
    }
 
}
export default CatsReducer