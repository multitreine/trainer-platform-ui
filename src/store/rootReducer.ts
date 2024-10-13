import { combineReducers } from "redux";
import { reducer as headerReducer } from "@/ducks/header/reducers";
import { reducer as heroReducer } from "@/ducks/hero/reducers";
import { reducer as cursesReducer } from "@/ducks/courses/reducers";
import { reducer as teachersReducer } from "@/ducks/teachers/reducers";
import { reducer as structureReducer } from "@/ducks/structure/reducers";
import { reducer as footerReducer } from "@/ducks/footer/reducers";

const rootReducer = combineReducers({
  header: headerReducer,
  hero: heroReducer,
  courses: cursesReducer,
  teachers: teachersReducer,
  structure: structureReducer,
  footer: footerReducer,
})as any;

export { rootReducer }