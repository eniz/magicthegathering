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
      return {
        ...state,
        status: Status.LOADING
      }

    case CARDS_FAILED:
      return {
        ...state,
        status: Status.FAILED,
        reason
      }

    case CARDS_SUCCEEDED:
      return {
        ...state,
        status: Status.LOADED,
        data: [ ...state.data, ...cards ],
        pageId: ++pageId
      }

    case CREATE_STORE_CLEAR:
      return initialState;

    default:
      return state;
  }
}

