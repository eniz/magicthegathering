import { put, takeLatest } from 'redux-saga/effects';
import { fetchCardDetailFromApi } from "../helpers/api";
import {
  CARD_DETAIL_REQUESTED,
  cardDetailFailed,
  cardDetailSucceeded,
} from '../actions/card';

function* fetchCardDetail({ cardId }) {
  try {
    const card = yield fetchCardDetailFromApi(cardId);
    yield put(cardDetailSucceeded(card.data.card));
  } catch (e) {
    yield put(cardDetailFailed(e));
  }
}

export default function* rootSaga() {
  yield takeLatest(CARD_DETAIL_REQUESTED, fetchCardDetail);
}
