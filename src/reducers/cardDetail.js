import {
  CARD_DETAIL_SUCCEEDED,
  CARD_DETAIL_REQUESTED,
  CARD_DETAIL_FAILED,
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
      return {
        ...state,
        status: Status.LOADING
      }

    case CARD_DETAIL_FAILED:
      return  {
        ...state,
        status: Status.FAILED,
        reason
      }

    case CARD_DETAIL_SUCCEEDED:
      return {
        ...state,
        status: Status.LOADED,
        data: card
      }

    default:
      return state;
  }
}
