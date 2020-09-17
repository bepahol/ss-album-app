import { reducer as albumReducer } from "./AlbumRedux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  album: albumReducer,
});

export default rootReducer;
