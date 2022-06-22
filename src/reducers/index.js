import { combineReducers } from "redux";
import CatsReducer from "./CatsReducer";
import FavCatReducer from "./FavCatReducer";

let allReducers=combineReducers({
    localFacts: CatsReducer,
    favFacts: FavCatReducer
})
export default allReducers