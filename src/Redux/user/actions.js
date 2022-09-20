
import { onValue, set } from "firebase/database";
import { auth, getUserRef, logIn, register, userRef } from "../../Services/firebase";

export const CHANGE_NAME = "USER::CHANGE_NAME";
export const SIGN_IN = "USER::SIGN_IN";
export const SIGN_OUT = "USER::SIGN_OUT";
export const SHOW_USERS = "USER::SHOW_USERS";
export const REQUEST_USER_LOADING = "USER::REQUEST_LOADING"
export const REQUEST_USER_SUCCESS = "USER::REQUEST_SUCCESS"
export const REQUEST_USER_FAILURE = "USER::REQUEST_FAILURE"


export const showUsers = (users) => ({
    type: SHOW_USERS,
    payload: users
})


export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
});


export const signIn = () => ({
    type: SIGN_IN,
});

export const signOut = () => ({
    type: SIGN_OUT,
});


export const userLoading = (isLoading) => ({
    type: REQUEST_USER_LOADING,
    payload: isLoading
});

export const userSuccess = () => ({
    type: REQUEST_USER_SUCCESS,
});

export const userFailure = (error) => ({
    type: REQUEST_USER_FAILURE,
    payload: error
});




export const usersList = () => async (dispatch) => {
    onValue(userRef, (snapshot) => {
        dispatch(showUsers(Object.values(snapshot.val() || [])));

    })
};

//делается автоматически при изменении статуса пользователя
export const isAuthed = () => async (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(signIn());
        } else {
            dispatch(signOut());
        }
    })
}

//пользователь логинится ручками, нажимая кнопку
export const logInByClick = ({ email, password }) => async (dispatch) => {
    dispatch(userLoading(true));
    try {
        await logIn(email, password);
        dispatch(userSuccess());
    }
    catch (err) {
        dispatch(userFailure(err.message));
    }
}

//пользователь регистрируется
export const registerByClick = ({ email, password, user }) => async (dispatch) => {
    dispatch(userLoading(true));
    try {
        await register(email, password);
        dispatch(userSuccess());
    }
    catch (err) {
        dispatch(userFailure(err.message));
    }
    finally {
        const userinfo = {
            name: user,
            id: auth.currentUser.uid,
            email: email
        };
        set(getUserRef(auth.currentUser.uid), userinfo);
    }
}