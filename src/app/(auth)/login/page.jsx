'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunct = async (data) => {
        console.log(data, "data");

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: false,
            callbackURL: "/",

        });

    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackUrl: "/",
            options: {
                queryParams: {
                    prompt: "select_account",
                },
            },
        });
        console.log(data, "data");
    }

    return (

        <div className='max-w-5xl mx-auto min-h-[70vh] flex justify-center items-center bg-slate-50'>
            <div className="p-5 rounded-xl bg-[#FFFFFF]">
                <h2 className='text-3xl font-bold text-center mb-6 px-3'>Sign in your account</h2>
                <form className='space-y-5 p-2' onSubmit={handleSubmit(handleLoginFunct)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input"
                            name="email"
                            placeholder="Enter your Email"
                            {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input"
                            name="password"
                            placeholder="Enter password"
                            {...register("password", { required: "Password is required" })} />
                        <span className='absolute right-3 top-4' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <div className='flex justify-end gap-2'>
                        <button className="bg-gray-950 text-white text-lg px-10 rounded">Login</button>
                        <input type="reset" value="Reset" className="btn bg-blue-600 text-white" />
                    </div>
                </form>
                <div className='flex flex-col justify-center items-center'>
                    <p className='mt-4 text-center'>Don't have an account? <Link href={'/register'} className='text-blue-600'>Register</Link></p>
                    <p className='text-lg text-center'>Or</p>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>


            </div>
        </div>
    );

};

export default LoginPage;
