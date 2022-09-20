export const selectUsersList = (state) => state.user.users;
export const selectAuth = (state) => state.user.authed;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserLoading = (state) => state.user.request.loading;
export const selectUserError = (state) => state.user.request.error; 