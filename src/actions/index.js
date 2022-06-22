export const addToLocal=(newItem) => {
    return {
        type: "ADD_TO_LOCAL",
        payload: newItem
    }
}
export const deleteLocal=(id)=>{
    return{
        type: 'DELETE_LOCAL',
        payload: id
    }
}
export const addToFav=(id)=>{
    return {
        type:'ADD_TO_FAV',
        payload: id
}
}
export const deleteFav=(id)=>{
    return {
        type:'DELETE_FROM_FAV',
        payload: id
    }
}