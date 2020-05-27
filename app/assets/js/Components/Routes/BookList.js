import React, {useContext} from 'react';
import {BookContext} from "../../contexts/BookContext";

const BookList = () => {
    const {books} = useContext(BookContext);
    return (
        <div>
            <ul>
                {books.map(book => {
                    return (<li key={book.id}>{book.title}</li>)
                })}
            </ul>
        </div>
    );
}

export default BookList;