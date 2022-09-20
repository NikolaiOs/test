import { Link } from "react-router-dom";
import { makeBooks } from "../../helpers/filter";
import './home.css'
import { BookToShow } from "../BookToShow/bookToShow";
import { SliderComp } from "../Slider/slider";
import Slider from "react-slick";
// https://react-slick.neostack.com/docs/api

const Home = ({ books = makeBooks() }) => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        autoplay: true
    };

    return (
        <div className="container">
            <main className="home gradient">
                <Link to="/reader">Reader</Link>
                <section className="home__text"><p> Читай!</p>
                    <p> Будь в моменте </p>
                    <p> — делись эмоциями!</p>
                </section>
                <section className="sliders">
                    <SliderComp books={books} settings={settings}></SliderComp>
                    <SliderComp books={books} settings={settings}></SliderComp>
                    <div className="slider__container">
                        <Slider className="slider"  {...editor_settings}>
                            {books.map(book => {
                                return (
                                    <div key={book.id} >
                                        <div className="slider__editor">
                                            <p className="slider__sign">Выбор редакции</p>
                                            <div className="editor__book">
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
                    <SliderComp books={books} settings={settings}></SliderComp>
                    <div className="slider__container">
                        <div className="slider__text flex">
                            <p className="slider__title">Коллекции</p>
                            {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                            <Link to={`books`} className="slider__all">Все</Link>
                        </div>
                        <Slider className="slider"  {...collections_settings}>
                            {books.map(book => {
                                return (
                                    <div key={book.id} >
                                        <BookToShow book={book} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </section >
            </main >
        </div>
    )
}

export { Home }