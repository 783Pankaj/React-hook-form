import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit =(data)=>{
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname"  {...register('fname')} /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" {...register('lname')} /><br />

                <label htmlFor="email">Email address</label><br />
                <input type="email" id="email" {...register('email')}/><br />

                <label htmlFor="phone">Phone Number:</label><br />
                <input type="text" id="phone"  {...register('phone')}/><br />

                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password"   {...register('password')} /><br/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Register
