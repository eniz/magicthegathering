import {
  CARDS_SUCCEEDED,
  CARDS_REQUESTED,
  CARDS_FAILED,
} from '../actions/card';
import * as Status from '../helpers/status';

const initialState = {
  status: Status.INIT,
  data: [],
  reason: null,
  pageId: 1,
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
        pageId: state.pageId + 1
      }

    default:
      return state;
  }
}

