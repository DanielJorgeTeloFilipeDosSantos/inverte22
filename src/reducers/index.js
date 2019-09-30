import { combineReducers } from "redux";
import authReducer from "./authReducer";

//import changeNumberName from './ChangeNameNumber'

const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;
