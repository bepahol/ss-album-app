import { call, all, put, takeLatest } from "redux-saga/effects";
import AlbumActions, { AlbumTypes } from "../redux/AlbumRedux";
import API from "services/Api";
import * as Util from "utils/Util";
import * as Transform from "utils/transforms";

export const theApi = API.create();

function* fetchAlbumsSaga(api, payload) {
  const response = yield call(api.getAlbums, payload.artist);

  if (response.ok) {
    yield put(AlbumActions.fetchAlbumsSuccess(Transform.removeDuplicateAlbums(response.data.results)));
    // yield put(AlbumActions.fetchAlbumsSuccess(response.data));
  } else {
    yield put(AlbumActions.fetchAlbumsFailure(Util.getErrorMessage(response)));
  }
}

// prettier-ignore
function* rootSaga() {
  yield all([
    takeLatest(AlbumTypes.FETCH_ALBUMS_REQUEST, fetchAlbumsSaga, theApi),
  ]);
}

export default rootSaga;
