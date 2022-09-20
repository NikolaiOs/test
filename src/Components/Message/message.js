import React, { useEffect, useState } from "react";
import { MessageShow } from "../MessageToShow/messageToShow";

export function Message({ message }) {

    const [replies, setReplies] = useState(Object.entries(message?.replies || []));

    //!КОСТЫЛЬ, НО ПО-ДРУГОМУ НЕ ПРИДУМАЛА
    useEffect(() => {
        setReplies(Object.entries(message?.replies || []));
    }, [message]);

    return (

        <MessageShow messageToShow={message} messageToReply={message.id} >
            {replies.map(reply => {
                return (
                    <MessageShow className="reply" messageToShow={reply[1]} messageToReply={message.id} key={reply[0]}>
                    </MessageShow>
                )
            })}

        </MessageShow>

    )
}