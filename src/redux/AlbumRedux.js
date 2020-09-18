import { createReducer, createActions, Types as ReduxSauceTypes } from "reduxsauce";
import Immutable from "seamless-immutable";
import { HYDRATE } from "next-redux-wrapper";
import * as Util from "utils/Util";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchAlbumsRequest: ["artist"],
  fetchAlbumsSuccess: ["albums"],
  fetchAlbumsFailure: ["error"],
});

export const AlbumTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  albums: {
    data: [],
    fetching: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const fetchAlbumsRequest = (state) => {
  log("fetchAlbumsRequest");
  const mergedAlbums = state.albums.merge({ fetching: true });
  return state.merge({ albums: mergedAlbums });
};

export const fetchAlbumsSuccess = (state, payload) => {
  log("fetchAlbumsSuccess");
  const mergedAlbums = state.albums.merge({
    data: payload.albums,
    fetching: false,
  });
  return state.merge({ albums: mergedAlbums });
};

export const fetchAlbumsFailure = (state, payload) => {
  log("fetchAlbumsFailure");
  const mergedAlbums = state.albums.merge({
    fetching: false,
    error: payload.error,
  });
  return state.merge({ albums: mergedAlbums });
};

export const hydrate = (state, payload) => {
  log("hydrate");
  // return state.merge({ ...payload.payload.user })
  return state;
};

export const defaultHandler = (state, payload) => {
  console.log("payload: ", payload);
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */
export const HANDLERS = {
  [Types.FETCH_ALBUMS_REQUEST]: fetchAlbumsRequest,
  [Types.FETCH_ALBUMS_SUCCESS]: fetchAlbumsSuccess,
  [Types.FETCH_ALBUMS_FAILURE]: fetchAlbumsFailure,
  [HYDRATE]: hydrate,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
};
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

function log(methodName) {
  Util.log("Album", methodName);
}
