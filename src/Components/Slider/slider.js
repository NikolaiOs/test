import { Link } from "react-router-dom"
import { BookToShow } from "../BookToShow/bookToShow"
import Slider from "react-slick";
import './slider.css'

export const SliderComp = ({ books, settings }) => {
    return (
        <>
            <div className="slider__container">
                <div className="slider__text flex">
                    <p className="slider__title">Новинки</p>
                    {/* !!!ТУТ НАДО БУДЕТ КАК-ТО ПЕРЕДАВАТЬ МАССИВ КНИГ В КОМПОНЕНТ BOOKS!!! */}
                    <Link to={`books`} className="slider__all">Все</Link>
                </div>
                <Slider className="slider" {...settings}>
                    {books.map(book => {
                        return (
                            <div key={book.id}>
                                <BookToShow book={book} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}