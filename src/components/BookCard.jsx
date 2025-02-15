import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/cartSlice';
import {Link} from 'react-router-dom';
import '../index.css';


const BookCard = ({book}) => {
    const dispatch = useDispatch();

    if (!book || !book.authorName || !book.authorName) {
        return <div className="p-4 border">Данные о книге отсутствуют</div>;
    }

    const finalPrice = book.price - (book.discount || 0);


    return (
        <div
            className="border rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">

            <div className="flex-1 mb-2">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p>{book.authorName}</p>
                {book.discount > 0 ? (
                    <p>
                        <span className="line-through">{book.price} KZT</span>{' '}
                        <span className="text-red-500">{finalPrice} KZT</span>
                    </p>
                ) : (
                    <p>{book.price} KZT</p>
                )}
                <p>Статус: {book.stockQuantity > 0 ? 'В наличии' : 'Нет в наличии'}</p>
            </div>

            {/* Кнопки действий */}
            <div className="flex justify-between items-center mt-4">
                {/* Кнопка "В корзину" */}
                {book.stockQuantity > 0 && (
                    <button
                        className="bg-green-500 text-white text-sm px-3 py-2 rounded-md shadow hover:bg-green-400"
                        onClick={() => dispatch(addToCart({book, quantity: 1}))}
                    >
                        В корзину
                    </button>
                )}
            </div>
        </div>

    );
};

export default BookCard;
