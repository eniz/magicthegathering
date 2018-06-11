import {
  CARD_DETAIL_SUCCEEDED,
  CARD_DETAIL_REQUESTED,
  CARD_DETAIL_FAILED,
  CREATE_STORE_CLEAR,
} from '../actions/card';
import * as Status from '../helpers/status';

const initialState = {
  status: Status.INIT,
  card: {},
  reason: null,
};

export default function (state = initialState, { type, card, reason }) {
  switch (type) {
    case CARD_DETAIL_REQUESTED:
      return Object.assign({}, state, {
        status: Status.LOADING
      });

    case CARD_DETAIL_FAILED:
      return Object.assign({}, state, {
        status: Status.FAILED,
        reason
      });

    case CARD_DETAIL_SUCCEEDED:
      return Object.assign({}, state, {
        status: Status.LOADED,
        data: card
      });

    case CREATE_STORE_CLEAR:
      return initialState;

    default:
      return state;
  }
}
