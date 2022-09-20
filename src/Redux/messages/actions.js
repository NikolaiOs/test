import { onValue, set } from "firebase/database";
import { auth, getMessageRefById, getMsgsRefByChatId, getReplyRefByMsgId } from "../../Services/firebase";

export const SHOW_MESSAGES = "MESSAGES::SHOW_LIST";
export const REPLY = "MESSAGES::REPLY";
export const SHOW_REPLIES = "MESSAGES::SHOW_REPLIES";
export const REQUEST_MESSAGES_LOADING = "MESSAGES::REQUEST_LOADING"
export const REQUEST_MESSAGES_SUCCESS = "MESSAGES::REQUEST_SUCCESS"
export const REQUEST_MESSAGES_FAILURE = "MESSAGES::REQUEST_FAILURE"

export const showMessages = (commentsList) => ({
    type: SHOW_MESSAGES,
    payload: commentsList

})


export const fromReply = (boolean, msgId, replyTo) => ({
    type: REPLY,
    payload: {
        isReply: boolean,
        topMsg: msgId,
        replyTo: replyTo
    }
})


export const userLoading = (isLoading) => ({
    type: REQUEST_MESSAGES_LOADING,
    payload: isLoading
});

export const userSuccess = () => ({
    type: REQUEST_MESSAGES_SUCCESS,
});

export const userFailure = (error) => ({
    type: REQUEST_MESSAGES_FAILURE,
    payload: error
});


export const messagesList = (bookPageId) => async (dispatch) => {
    //!!!почему-то при использовании селектора state.messages.request.loading всегда выдает false и часто вызываются экшены loading'а и success'а
    // dispatch(getMessages());
    onValue(getMsgsRefByChatId(bookPageId), (snapshot) => {
        dispatch(showMessages(Object.values(snapshot.val() || [])));
    });
};

export const handleSendMessage = (value, bookPageId, msgId, replyToId) => async (dispatch) => {
    const date = new Date();
    const now = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    const newMsg = {
        author: auth.currentUser.uid,
        text: value,
        id: Date.now() + Math.ceil(Math.random() * 100),
        date: now,

    };
    if (msgId != null) { }
    // добавление сообщения в firebase
    if (msgId != null) {
        newMsg.replyTo = replyToId;
        set(getReplyRefByMsgId(bookPageId, msgId, newMsg.id), newMsg);
    } else {
        newMsg.replies = [];
        set(getMessageRefById(bookPageId, newMsg.id), newMsg);
    }
}


export const getMessages = () => async (dispatch) => {
    dispatch(userLoading(true));
    try {
        dispatch(userSuccess());
    }
    catch (err) {
        dispatch(userFailure(err.message));
    }
}