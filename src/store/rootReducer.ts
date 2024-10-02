
import { combineReducers } from "redux";
import { headerReducer } from "@/ducks/header/reducers";

const rootReducer = combineReducers({
  header: headerReducer 
}) as any;;

export { rootReducer }