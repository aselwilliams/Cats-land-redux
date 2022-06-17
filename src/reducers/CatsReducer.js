
const CatsReducer=(state=[],action){
    switch(action.type){
        case 'ADD_TO_LOCAL':
            return [
                ...state, {action.payload}
    ]
    }
}
export default CatsReducer