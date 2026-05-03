"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


import { useRouter } from "next/navigation";

export default function SignUpPage() {
    
    const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;    
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
       
    });
    console.log(data, error);  

   

    if(!error) {
      await authClient.signIn.email({
    email,
    password,
  });
       router.push("/");
    }

  };

  return (
    <div className="max-w-6xl mx-auto border border-accent-soft w-125 py-10 mt-5 my-5">
      <h1 className="text-center text-2xl font-bold mb-5">Please Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text" className="text-lg">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>        

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="abc@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button>
            Submit
            </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

// Utsho - login page

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