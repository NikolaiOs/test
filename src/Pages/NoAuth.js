import { useState } from "react";
import { PopUp } from "../Components/PopUp/popUp"

export const NoAuth = () => {

    const [modalActive, setModalActive] = useState(true);

    return (
        <PopUp active={modalActive} setActive={setModalActive}>
            <h4>Оставлять комментарии могут только зарегистрированные пользователи</h4>
        </PopUp>
    )
}