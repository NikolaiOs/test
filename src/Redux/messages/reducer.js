
import { REPLY, REQUEST_MESSAGES_FAILURE, REQUEST_MESSAGES_LOADING, REQUEST_MESSAGES_SUCCESS, SHOW_MESSAGES } from "./actions";



const initialState = {
    messageList: [],
    isReply: null,
    replyTo: null,
    topMsg: null,
    request: {
        loading: false,
        error: "",
    }
};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {



        case SHOW_MESSAGES:
            return {
                ...state,
                messageList: payload,
            };
        case REPLY:
            return {
                ...state,
                isReply: payload.isReply,
                topMsg: payload.topMsg,
                replyTo: payload.replyTo
            };
        case REQUEST_MESSAGES_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    loading: payload,
                }
            };
        case REQUEST_MESSAGES_FAILURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    error: payload,
                    loading: false,
                }
            };
        case REQUEST_MESSAGES_SUCCESS:
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
    };
}