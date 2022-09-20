export const selectMesagesList = state => state.messages.messageList;
export const selectRepliesList = state => state.messages.replies;


export const selectIsReply = state => state.messages.isReply;
export const selectReplyTo = state => state.messages.replyTo;
export const selectTopMsgToReply = state => state.messages.topMsg;
export const selectMsgLoading = state => state.messages.request.loading;
export const selectMsgError = state => state.messages.request.error;

