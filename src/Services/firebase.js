// Import the functions you need from the SDKs you need
import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAckSc1E-GUbGK6O1ZLUl89ZQYvfl_lUaA",
    authDomain: "teambook-a3778.firebaseapp.com",
    projectId: "teambook-a3778",
    storageBucket: "teambook-a3778.appspot.com",
    messagingSenderId: "228469952229",
    appId: "1:228469952229:web:4140977dac9c6cbde68e0c",
    measurementId: "G-4JXF0JZDGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// авторизация и ее разные действия
export const auth = getAuth(app);

export const register = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);

//работа с бд
export const database = getDatabase(app);

export const userRef = ref(database, 'users');
export const getUserRef = (userId) => ref(database, `users/${userId}`);

export const messagesRef = ref(database, 'messages');
export const getMsgsRefByChatId = (chatId) => ref(database, `messages/${chatId}`);
export const getMessageRefById = (chatId, msgId) =>
    ref(database, `messages/${chatId}/${msgId}`);
export const getRepliesRefByChatId = (chatId) => ref(database, `replies/${chatId}`);
// export const getReplyRefByMsgId = (chatId, msgId, replyId) =>
//     ref(database, `replies/${chatId}/${msgId}/${replyId}`);
export const getReplyRefByMsgId = (chatId, msgId, replyId) =>
    ref(database, `messages/${chatId}/${msgId}/replies/${replyId}`);