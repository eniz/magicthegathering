import axios from 'axios';

const BASE_URL = `https://api.magicthegathering.io/v1`
const PAGE_SIZE = 50

const cardsURL = (pageId) => `${BASE_URL}/cards/?page=${pageId}&pageSize=${PAGE_SIZE}`
const cardDetailURL = (cardId) => `${BASE_URL}/cards${cardId}`

export const fetchCardsFromApi = () => axios.get(cardsURL(1))
export const fetchCardDetailFromApi = (cardId) => axios.get(cardDetailURL(cardId))
