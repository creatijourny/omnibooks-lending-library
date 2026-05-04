'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, 
        handleSubmit, 
        formState: {errors} } = useForm();

    const handleRegisterFunct = (data) => {
        console.log(data, "data")
        const { name, email, photo, password } = data;
        console.log(name, photo);
    }

    return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
        <div className="p-4 rounded-xl bg-[#FFFFFF]">
            <h2 className='text-3xl font-bold text-center mb-6 px-3'>Register your account</h2>
            <form className='space-y-5 p-2' onSubmit={handleSubmit(handleRegisterFunct)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input"                    
                     placeholder="Enter your Name"
                     {...register("name", {required: "Name field is required"})} />
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input type="text" className="input"                    
                     placeholder="Enter photo URL"
                     {...register("photo", {required: "Photo URL is required"})} />
                     {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input"                    
                     placeholder="Enter your Email"
                     {...register("email", {required: "Email field is required"})} />
                     {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input"                     
                    placeholder="Enter password"
                    {...register("password", { required: "Password is required" })} />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </fieldset>
                <button className="btn bg-[#0F172A] text-white w-full rounded">Register</button>
            </form>
            
        </div>
    </div>
    );

};

export default RegisterPage;
