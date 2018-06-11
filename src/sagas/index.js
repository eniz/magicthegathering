import { fork } from 'redux-saga/effects';
import watchCards from './cards';
import watchCardDetail from './cardDetail';

export default function* root() {
  yield [
    fork(watchCards),
    fork(watchCardDetail)
  ];
}
