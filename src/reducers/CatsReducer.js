
const CatsReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TO_LOCAL':
            return [
                ...state, {action.payload}
    ]
    default:
        return state
    }
 
}
export default CatsReducer