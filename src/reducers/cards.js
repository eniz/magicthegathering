import {
  CARDS_SUCCEEDED,
  CARDS_REQUESTED,
  CARDS_FAILED,
  CREATE_STORE_CLEAR,
} from '../actions/card';
import * as Status from '../helpers/status';

let pageId = 1;

const initialState = {
  status: Status.INIT,
  data: [],
  reason: null,
  pageId: pageId,
};

export default function (state = initialState, { type, cards, reason }) {
  switch (type) {
    case CARDS_REQUESTED:
      return Object.assign({}, state, {
        status: Status.LOADING
      });

    case CARDS_FAILED:
      return Object.assign({}, state, {
        status: Status.FAILED,
        reason
      });

    case CARDS_SUCCEEDED:
      return Object.assign({}, state, {
        status: Status.LOADED,
        data: [
          ...state.data,
          ...cards
        ],
        pageId: pageId + 1,
      });

    case CREATE_STORE_CLEAR:
      return initialState;

    default:
      return state;
  }
}

