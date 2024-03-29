import { addToFav, deleteFav } from "../actions";

const FavCatReducer = (state = [], action) => {
  switch (action.type) {
    case addToFav:
      return [...state, action.payload];
    case deleteFav:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default FavCatReducer;
