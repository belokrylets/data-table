import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { postsReduser } from "./postsReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { pagesReduser } from "./pagesReduser";
import { sortingReduser } from "./sortingReduser";
import { searchReduser } from "./searchReduser";

const rootReduser = combineReducers({
  posts: postsReduser,
  pages: pagesReduser,
  sort: sortingReduser,
  search: searchReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
