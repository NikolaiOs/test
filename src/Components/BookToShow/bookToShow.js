import { Link } from "react-router-dom"
import './bookToShow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BookToShow = ({ book, book_className }) => {

    return (
        <Link key={book.id} className={`book ${book_className}`} to={`/book/${book.id}`}>
            <img src={book.cover} className="book__cover" alt='book cover'></img>
            <div className="book__text">
                <p className="book__name p">{book.name}</p>
                <p className="book__author p">{book.author}</p>
            </div>
        </Link>
    )
}