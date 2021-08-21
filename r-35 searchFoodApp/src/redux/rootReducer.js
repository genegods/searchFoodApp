import { foodReducer, FOOD_KEY } from "./foodRedux/food.reducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
  [FOOD_KEY]:foodReducer
})

export {rootReducer}