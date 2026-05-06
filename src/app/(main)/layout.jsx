import Banner from '@/components/homepage/Banner';
import FeaturedBooks from '@/components/homepage/FeaturedBooks';
import Navbar from '@/components/shared/Navbar';
import NewArrivals from '@/components/NewArrivals';
import React from 'react';
import AllBooksPage from './all-books/page';
import Footer from '@/components/Footer';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Banner />
            <NewArrivals />
            <FeaturedBooks />            
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;