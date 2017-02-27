import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import allReducers from "./reducers"

const middleware = applyMiddleware(thunk)



export default createStore(allReducers, middleware)
