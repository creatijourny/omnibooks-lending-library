import React from "react";
import Link from "next/link";


const NotFound = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col">
            <h2 className="text-5xl font-bold text-red-500 mb-6">This page is not found.</h2>
            <Link href={'/'}>
            <button className="btn btn-primary text-lg">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;