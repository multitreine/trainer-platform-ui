import { combineReducers } from "redux";
import { reducer as headerReducer } from "@/ducks/header/reducers";
import { reducer as heroReducer } from "@/ducks/hero/reducers";
import { reducer as cursesReducer } from "@/ducks/courses/reducers";

const rootReducer = combineReducers({
  header: headerReducer,
  hero: heroReducer,
  courses: cursesReducer
})as any;

export { rootReducer }