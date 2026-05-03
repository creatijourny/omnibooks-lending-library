import Banner from '@/components/homepage/Banner';
import FeaturedBooks from '@/components/homepage/FeaturedBooks';
import Navbar from '@/components/Navbar';
import NewArrivals from '@/components/NewArrivals';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Banner />
            <NewArrivals />
            <FeaturedBooks />
            {children}
        </>
    );
};

export default MainLayout;