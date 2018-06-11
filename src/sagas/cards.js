import { put, takeLatest } from 'redux-saga/effects';
import { fetchCardsFromApi } from "../helpers/api";
import {
  CARDS_REQUESTED,
  cardsFailed,
  cardsSucceeded,
} from '../actions/card';

function* fetchCards({ pageId }) {
  console.log(pageId);
  try {
    const cards = yield fetchCardsFromApi(pageId);
    yield put(cardsSucceeded(cards.data));
  } catch (e) {
    yield put(cardsFailed(e));
  }
  }

export default function* rootSaga() {
  yield takeLatest(CARDS_REQUESTED, fetchCards);
}