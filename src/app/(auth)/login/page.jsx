'use client'
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

    const handleLoginFunct = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }


    return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
        <div className="p-4 rounded-xl bg-[#FFFFFF]">
            <h2 className='text-3xl font-bold text-center mb-6 px-3'>Login your account</h2>
            <form className='space-y-5 p-2' onSubmit={handleLoginFunct}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input"
                    name="email"
                     placeholder="Enter your Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input" 
                    name="password"
                    placeholder="Enter password" />
                </fieldset>
                <button className="btn bg-[#0F172A] text-white w-full rounded">Login</button>
            </form>
            <p className='mt-4'>Don't have an account? <Link href={'/register'} className='text-blue-600'>Register</Link></p>
        </div>
    </div>
    );

};

export default LoginPage;

// Utsho login
{/* <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Sign Up</h2>
                <form className='space-y-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                </form>

            </div>

        </div> */}