import React, { useState } from "react";
import { selectUsersList } from "../../Redux/user/selectors";
import { Form } from "../Form/form";
import { useDispatch, useSelector } from "react-redux";
import './messageToShow.css'
import { fromReply } from "../../Redux/messages/actions";
import { SLICE_CHART } from "../../constants";
import { Link } from "react-router-dom";

export function MessageShow({ messageToShow, children, className, messageToReply }) {
    const dispatch = useDispatch();

    const users = useSelector(selectUsersList);
    const userName = users.find(user => user.id === messageToShow.author)

    const [dotsAreShown, setDotsAreShown] = useState(true);
    const [replyFormIsShown, setReplyFormIsShown] = useState(false);

    function readMore() {
        setDotsAreShown(!dotsAreShown);
    }

    function replyBtnHandler(repliedToId) {

        // const putReplyToTopLevelMsg = messages.findIndex(message => Number(Object.keys(message.replies)) === id);
        setReplyFormIsShown(true);
        // dispatch(fromReply(true, messages[putReplyToTopLevelMsg].id || id));
        dispatch(fromReply(true, messageToReply, repliedToId));
    }


    return (
        <div className={`message__item ${className}`} >
            {/* !Поменять на img */}
            < Link to="#" className="message__profile_pic" > <div href="#" alt="profile"></div> </Link >
            <Link to="#" className="message__author link">{userName?.name} </Link>
            <p className="message__text p">{messageToShow?.text.slice(0, SLICE_CHART)}{dotsAreShown === true && messageToShow?.text.length > SLICE_CHART ? <span>...</span> : <span>{messageToShow?.text.slice(SLICE_CHART)}</span>} </p>
            {messageToShow?.text.length > SLICE_CHART && <div className="message__details link" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}



            <div className="message__bottom flex">
                <p className="message__date p">{messageToShow.date}</p>
                <div className="message__reply p link" onClick={() => replyBtnHandler(messageToShow.id)} >Ответить</div>
                <div className="message__complain p link">Пожаловаться</div>
            </div>

            {replyFormIsShown && <Form setReplyFormIsShown={setReplyFormIsShown}></Form>}

            {children}

            {/* <Button value={"Удалить"} type="button" onClick={() => handleDeleteMessage(message.id)}></Button>
            <Button value={"Изменить"}  type="button" onClick={() => handleChangeMessage(message.id)}></Button> */}
        </div >
    )
}