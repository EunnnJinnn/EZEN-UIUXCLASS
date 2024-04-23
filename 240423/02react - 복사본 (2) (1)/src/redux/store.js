import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, compo(thunk));

export default store;
