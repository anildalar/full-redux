import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

let initialState = { user:'sunil',surname:'Sharma',userData:[] };


let store = legacy_createStore(rootReducer,initialState,applyMiddleware(thunk));


export default store;