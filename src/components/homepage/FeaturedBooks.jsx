import React from 'react';
import BookCard from '../BookCard';

const FeaturedBooks = async () => {
    const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');
    const books = await res.json();    
    const topBooks = books.slice(0, 4);
    // console.log(topBooks);
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl font-bold my-10 text-center text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent'>Featured Books</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    topBooks.map(book =>
                        <BookCard key={book.id} book={book}/>
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;