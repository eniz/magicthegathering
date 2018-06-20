import { put, takeLatest } from 'redux-saga/effects';
import { fetchCardsFromApi } from "../helpers/api";
import {
  CARDS_REQUESTED,
  cardsFailed,
  cardsSucceeded,
} from '../actions/card';

function* fetchCards({ pageId }) {
  try {
    const response = yield fetchCardsFromApi(pageId);
    yield put(cardsSucceeded(response.data.cards));
  } catch (e) {
    yield put(cardsFailed(e));
  }
}

export default function* rootSaga() {
  yield takeLatest(CARDS_REQUESTED, fetchCards);
}
