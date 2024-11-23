import { takeEvery } from "redux-saga/effects";
import { GET_LATEST_NEEWS } from "../constants";
import { getLatestNews } from "../../api";

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
