import React from "react";
import { makeBooks } from "../../helpers/filter";
import { BookToShow } from "../BookToShow/bookToShow";
import './books.css'

const Books = ({ books = makeBooks() }) => {

    return (

        <div className=" no-gradient">
            <div className="container">
                <main className="books">
                    {books.map(book => {
                        return <BookToShow key={book.id} book={book} book_className={'book_page'} />
                    })}
                </main>
            </div>
        </div>
    )
}

export { Books }