import { useParams } from "react-router-dom";

export const BookPage = () => {
    const { bookId } = useParams();

    return (
        <>
            <h1>Book page</h1>
        </>
    )
}