import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { makeBooks } from "../../helpers/filter";
import './home.css'
import { BookToShow } from "../BookToShow/bookToShow";


const Home = () => {
    const books = makeBooks();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        swipeToSlide: true
    };

    const editor_settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // Delay between each auto scroll (in milliseconds)
        autoplaySpeed: 3000,
        autoplay: true
    };

    const collections_settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        swipeToSlide: true
    };

    return (
        <main className="home gradient">
            <Link to="/reader">Reader</Link>
            <section className="home__text"><p> Читай!</p>
                <p> Будь в моменте </p>
                <p> — делись эмоциями!</p>
            </section>
            <section className="sliders">
                <div className="slider__container">
                    <div className="slider__text flex">
                        <p className="slider__title">Бестселлеры</p>
                        {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                        <Link to={`books`} className="slider__all">Все</Link>
                    </div>
                    <Slider className="slider" {...settings}>

                        {books.map(book => {
                            return (
                                <div>
                                    <BookToShow book={book} />
                                </div>
                            )
                        })}

                    </Slider>
                </div>
                <div className="slider__container">
                    <div className="slider__text flex">
                        <p className="slider__title">Новинки</p>
                        {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                        <Link to={`books`} className="slider__all">Все</Link>
                    </div>
                    <Slider className="slider" {...settings}>
                        {books.map(book => {
                            return (
                                <div>
                                    <BookToShow book={book} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="slider__container">
                    <Slider className="slider"  {...editor_settings}>
                        {books.map(book => {
                            return (
                                <div>
                                    <div className="slider__editor">
                                        <div key={book.id} className="editor__book">
                                            <Link className="slider_book-cover" to={`/book/${book.id}`}><img src={book.cover} className="book__cover" alt='book cover'></img></Link>
                                            {/* <div className="book__text slider__book-text"> */}
                                            <p className="slider__title slider__book-name">{book.name}</p>
                                            <p className="slider__book-description">{book.description}</p>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="slider__container">
                    <div className="slider__text flex">
                        <p className="slider__title">Популярные на этой неделе</p>
                        {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                        <Link to={`books`} className="slider__all">Все</Link>
                    </div>
                    <Slider className="slider" {...settings}>
                        {books.map(book => {
                            return (
                                <div>
                                    <BookToShow book={book} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="slider__container">
                    <div className="slider__text flex">
                        <p className="slider__title">Коллекции</p>
                        {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                        <Link to={`books`} className="slider__all">Все</Link>
                    </div>
                    <Slider className="slider" {...collections_settings}>
                        {books.map(book => {
                            return (
                                <div>
                                    <BookToShow book={book} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section >
        </main >
    )
}

export { Home }