import BookCard from '@/components/BookCard';
import React from 'react';
import BooksByCategory from '../category/[id]/page';
import Sidebar from '@/components/homepage/Sidebar';

const AllBooksPage = async () => {    
    const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');  

    const books = await res.json();
    // console.log(books);

    // const category = await searchParams;
    // // console.log(category);
    // const filteredBooks = books.filter(book => book.category == category);
    // console.log(filteredBooks);

    return (
        <div className='container mx-auto my-5'>
            
            <div className='grid grid-cols-2 gap-2 px-1 md:grid-cols-4 my-5'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>


        </div>
    );
};

export default AllBooksPage;