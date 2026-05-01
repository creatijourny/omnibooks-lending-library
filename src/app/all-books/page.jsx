import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooksPage = async () => {
    const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');
    const books = await res.json();
    console.log(books);

    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>All Books</h1>
            <div>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;