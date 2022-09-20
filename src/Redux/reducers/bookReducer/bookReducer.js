import { ERROR_BOOKS, GET_BOOKS, LOADING_BOOKS, PAGE_ID_BOOKS } from "../../actionTypes";
import { getError, getLoading, getBooks } from "../../action";

const initialState = {
    bookList: {},
    loader: false,
    error: null,
    bookPageId: 10
};


export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                bookList: action.payload,
                loader: false
            }
        case LOADING_BOOKS:
            return {
                ...state,
                loader: true
            }
        case ERROR_BOOKS:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        case PAGE_ID_BOOKS:
            return {
                ...state,
                bookPageId: action.payload
            }
        default:
            return state
    }
}

export const loadBooks = () => {


    return async dispatch => {
        dispatch(getLoading())
        try {
            const response = await fetch('https://catfact.ninja/fact?max_length=5000');
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const data = await response.json();
            dispatch(getBooks(data))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}




