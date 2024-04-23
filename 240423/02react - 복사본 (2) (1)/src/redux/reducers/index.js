import { combineReducers } from "redux";
import authentixateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authentixateReducer,
  product: productReducer,
});
