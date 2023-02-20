import { legacy_createStore, combineReducers } from "redux";
import  isShowReducer  from  '../reducer/isShowReducer'

const reducer = combineReducers({
  isShowReducer,
})
const store = legacy_createStore(reducer)
// 1


export default store