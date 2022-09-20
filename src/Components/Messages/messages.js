import { useEffect, useRef, useState } from 'react';
import { Message } from '../Message/message';
import { useDispatch, useSelector } from "react-redux";
import './messages.css'
import { selectMesagesList, selectMsgLoading, selectMsgError } from '../../Redux/messages/selectors';
import { messagesList } from '../../Redux/messages/actions';
import { selectPageId } from '../../Redux/reducers/bookReducer/bookSelector';
import { Button } from '../Button/button';
import { Form } from '../Form/form';
import { CircularProgress } from "@mui/material";



export const Messages = () => {

    const dispatch = useDispatch();
    const messages = useSelector(selectMesagesList);
    const pageId = useSelector(selectPageId);
    const loading = useSelector(selectMsgLoading);
    const error = useSelector(selectMsgError);

    const [formIsShown, setFormIsShown] = useState(false);

    const parentRef = useRef();

    useEffect(() => {
        const unsubscribe = dispatch(messagesList(pageId));
        return () => unsubscribe;
    }, [pageId]);

    return (
        <>
            {loading ? <CircularProgress /> :
                <>
                    <section ref={parentRef} className='messages__wrap'>
                        <Button className="center" type="button" onClick={() => setFormIsShown(!formIsShown)}>{!formIsShown ? "Написать комментарий" : "Скрыть"}</Button>
                        {formIsShown && <Form formIsShown={formIsShown} setFormIsShown={setFormIsShown} />}

                        <div className="messages">
                            {error && <h4>{error}</h4>}
                            {messages.map(message =>
                                <Message message={message} key={message.id}
                                />
                            )
                            }
                        </div>
                    </section>
                </>
            }
        </>
    )
}