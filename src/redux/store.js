import {createStore} from "redux";
import baseReducer from "./module/baseReducer";

const store = createStore(baseReducer);

export default store;