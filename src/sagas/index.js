import { fork, all } from 'redux-saga/effects';
import watchCards from './cards';
import watchCardDetail from './cardDetail';

export default function* root() {
  yield all([
    fork(watchCards),
    fork(watchCardDetail)
  ]);
}
