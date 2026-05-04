'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleLoginFunct = (data) => {
        console.log(data, "data")
    }

    return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
        <div className="p-4 rounded-xl bg-[#FFFFFF]">
            <h2 className='text-3xl font-bold text-center mb-6 px-3'>Login your account</h2>
            <form className='space-y-5 p-2' onSubmit={handleSubmit(handleLoginFunct)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input"
                    name="email"
                     placeholder="Enter your Email"
                     {...register("email", {required: "Email field is required"})} />
                     {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input" 
                    name="password"
                    placeholder="Enter password"
                    {...register("password", { required: "Password is required" })} />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </fieldset>
                <button className="btn bg-[#0F172A] text-white w-full rounded">Login</button>
            </form>
            <p className='mt-4'>Don't have an account? <Link href={'/register'} className='text-blue-600'>Register</Link></p>
        </div>
    </div>
    );

};

export default LoginPage;
