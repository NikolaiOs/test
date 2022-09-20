import { ERROR_BOOKS, GET_BOOKS, LOADING_BOOKS, PAGE_ID_BOOKS } from "./actionTypes";


export const getBooks = (data) => ({
    type: GET_BOOKS,
    payload: data
});

export const getLoading = () => ({
    type: LOADING_BOOKS
});

export const getError = (e) => ({
    type: ERROR_BOOKS,
    payload: e.toString()
});

export const getBookPageId = (id) => ({
    type: PAGE_ID_BOOKS,
    payload: id
});

