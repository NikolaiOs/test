import { auth } from "../../Services/firebase";
import { CHANGE_NAME, REQUEST_USER_FAILURE, REQUEST_USER_LOADING, REQUEST_USER_SUCCESS, SHOW_USERS, SIGN_IN, SIGN_OUT } from "./actions";


const initialState = {
    users: [],
    authed: false,
    currentUser: {},
    request: {
        loading: false,
        error: "",
    }
}

export const userReducer = (state = initialState, { type, payload }) => {
    let currentUser = state.users.find(user => user.id === auth.currentUser?.uid);
    switch (type) {
        case SHOW_USERS:
            return {
                ...state,
                users: payload,
                currentUser: currentUser || {},
            };
        case CHANGE_NAME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: payload
                },
            };
        case SIGN_IN:
            return {
                ...state,
                authed: true,
                currentUser: currentUser || {},
            };
        case SIGN_OUT:
            return {
                ...state,
                authed: false,
                currentUser: {}
            };
        case REQUEST_USER_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    loading: payload,
                }
            };
        case REQUEST_USER_FAILURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    error: payload,
                    loading: false,
                }
            };
        case REQUEST_USER_SUCCESS:
            return {
                ...state,
                request: {
                    ...state.request,
                    error: '',
                    loading: false,
                }
            };
        default:
            return state;
    }
}
