import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './form.css';
import { Input } from '../Input/input';
import { Button } from '../Button/button';
import { selectIsReply, selectReplyTo, selectTopMsgToReply } from '../../Redux/messages/selectors';
import { fromReply, handleSendMessage } from '../../Redux/messages/actions';
import { selectPageId } from '../../Redux/reducers/bookReducer/bookSelector';
import { selectAuth } from '../../Redux/user/selectors';
import { PopUp } from '../PopUp/popUp';


export const Form = ({ setReplyFormIsShown, formIsShown, setFormIsShown }) => {

    const dispatch = useDispatch();
    const inputRef = useRef();
    // let navigate = useNavigate();

    let [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);


    const isReply = useSelector(selectIsReply);
    const replyToMsg = useSelector(selectReplyTo);
    const topComment = useSelector(selectTopMsgToReply);
    const isAuthed = useSelector(selectAuth);
    const pageId = useSelector(selectPageId);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // фокусировка на поле ввода
    useEffect(() => { inputRef.current?.focus() }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isAuthed) {
            if (value) {
                if (isReply === true) {
                    dispatch(handleSendMessage(value, pageId, topComment, replyToMsg));
                    dispatch(fromReply(false, null));
                    setReplyFormIsShown(false);
                } else {
                    dispatch(handleSendMessage(value, pageId));
                    setFormIsShown(!formIsShown)
                }
            }
            inputRef.current?.focus();
            setValue('');
        } else {
            // navigate("/noauth", { replace: true }); 
            setModalActive(true);
        }

    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <Input className='input__form' type="text" value={value}
                    inputRef={inputRef}
                    placeholder='Текст сообщения' onChange={handleChange} />
                <Button type='submit' className="button__mt3vm button__right" >Отправить</Button>
                {!isAuthed && modalActive && <PopUp active={modalActive} setActive={setModalActive}>
                    <h4>Оставлять комментарии могут только зарегистрированные пользователи</h4>
                </PopUp>}
            </form>
        </>
    )
}