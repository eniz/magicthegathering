// Cards actions
export const CARDS_REQUESTED = 'CARDS_REQUESTED';
export const CARDS_SUCCEEDED = 'CARDS_SUCCEEDED';
export const CARDS_FAILED = 'CARDS_FAILED';

// Card Detail actions
export const CARD_DETAIL_REQUESTED = 'CARD_DETAIL_REQUESTED';
export const CARD_DETAIL_SUCCEEDED = 'CARD_DETAIL_SUCCEEDED';
export const CARD_DETAIL_FAILED = 'CARD_DETAIL_FAILED';

// Cards action creators
export const cardsRequested = (pageId) => ({
  type: CARDS_REQUESTED,
  pageId
});

export const cardsSucceeded = cards => ({
  type: CARDS_SUCCEEDED,
  cards
});

export const cardsFailed = reason => ({
  type: CARDS_FAILED,
  reason
});

// Card Detail action creators
export const cardDetailRequested = (cardId) => ({
  type: CARD_DETAIL_REQUESTED,
  cardId
});

export const cardDetailSucceeded = card => ({
  type: CARD_DETAIL_SUCCEEDED,
  card
});

export const cardDetailFailed = reason => ({
  type: CARD_DETAIL_FAILED,
  reason
});
