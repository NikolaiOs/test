import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./signIn.css"
import { selectUserError, selectUserLoading } from "../../Redux/user/selectors";
import { logInByClick, registerByClick } from "../../Redux/user/actions";
import { PopUp } from "../PopUp/popUp";
import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { SIGN_IN, SIGN_UP } from "../../constants";

export const SignIn = ({ modalActive, setModalActive }) => {
    const dispatch = useDispatch();

    // let location = useLocation();
    const [isSignUp, setIsSignUp] = useState(false);
    // const [modalActive, setModalActive] = useState(true);

    const loading = useSelector(selectUserLoading);
    const error = useSelector(selectUserError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');


    // const emailPattern = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // const usernamePattern = new RegExp(/^[a-z0-9_-]{3,15}$/);
    const usernamePattern = '^[a-z0-9_-]{3,15}$';
    // const passwordPattern = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}'

    // usernamePattern.test(user) вернет булеан

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const handleSignUp = async () => {
        dispatch(registerByClick({ email, password, user }));
    };


    const handleSignIn = async () => {
        dispatch(logInByClick({ email, password }));
    }


    // нажатие кнопки - подтверждение намерения залогиниться или зарегаться
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (location.pathname === SIGN_UP_LINK) {
        if (isSignUp) {
            handleSignUp();
        } else {
            handleSignIn();
        }

        setModalActive(false);
        setIsSignUp(false);
        setEmail("");
        setPassword("");
        setUser("");

    };

    //нет ссылок - не нужно перекидывать на другую
    // if (isSignUp) {
    //     return (<Navigate replace to="/" />)
    // }



    return (
        <PopUp active={modalActive} setActive={setModalActive}>
            <>
                {loading ? <CircularProgress /> :
                    <>
                        {/* вместо ссылки просто компонент условно рендерится, тогда наполнение на фоне не пропадает */}
                        {/* по этой причине сравнение идет с флагом, где  true=SIGN_UP false=SIGN_IN} */}

                        {/* <h2>{location.pathname === SIGN_UP_LINK ? SIGN_UP : SIGN_IN}</h2> */}
                        <h2>{isSignUp ? SIGN_UP : SIGN_IN}</h2>
                        <form className="signForm" onSubmit={handleSubmit}>
                            <div className="signForm__content">
                                <label htmlFor="email" className="left-column">Email</label>
                                <Input id="email" type="email" value={email} autoComplete={email} className="right-column" required onChange={handleChangeEmail} />

                                <label htmlFor="password" className="left-column">Password</label>
                                {/* !!!!ДУБЛИРОВАНИЕ КОДА!!!!!!! */}
                                {isSignUp ? <div className="right-column" data-tooltip="Пароль должен содержать от 8 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра или специальный символ, одна буква в нижнем регистре и одна буква в верхнем регистре">
                                    < Input id="password" type="password" value={password} autoComplete={password} pattern={passwordPattern} required onChange={handleChangePassword} />
                                </div>
                                    :
                                    < Input id="password" type="password" value={password} className="right-column" autoComplete={password} required onChange={handleChangePassword} />}

                                {/* {location.pathname === SIGN_UP_LINK && <> */}
                                {isSignUp && <>
                                    <label htmlFor="user" className="left-column">Username</label>
                                    <div className="right-column" data-tooltip="Имя пользователя должно содержать oт 3-х дo 15-ти cимвoлoв, в кaчecтвe cимвoлoв мoгyт быть иcпoльзoвaны бyквы aнглийcкoгo aлфaвитa в нижнeм peгиcтpe, цифpы, знaки тиpe и пoдчepкивaния">
                                        <Input id="user" type="text" value={user} pattern={usernamePattern} required onChange={handleChangeUser} /></div>
                                </>}

                            </div>
                            <Button className='button__mt3vm button__grid-row-4' type="submit">Подтвердить</Button>
                        </form>
                        {/* <Link to={location.pathname === SIGN_UP_LINK ? SIGN_IN_LINK : SIGN_UP_LINK} className="link">
                            {location.pathname === SIGN_UP_LINK ? SIGN_IN : SIGN_UP}
                        </Link> */}
                        <p className="link link__auth" onClick={() => setIsSignUp(!isSignUp)}> {isSignUp ? SIGN_IN : SIGN_UP}</p>
                        {error && <h4>{error}</h4>}
                    </>
                }
            </>
        </PopUp >
    )
}
