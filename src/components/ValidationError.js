import React from 'react'
import { useForm } from 'react-hook-form'

const ValidationError = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            // mode:'onChange'
            mode: 'onTouched'
        }
    );
    const onSubmit = (data) => console.log(data)
    console.log(errors)
    return (
        <div style={{ padding: '10px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ margin: '10px' }}>
                    <label htmlFor='fullname'>Full Name</label>
                    <input
                        type='text'
                        id='fullname'
                        name='fullname'
                        //  minLength='4'
                        {...register('fullname',
                            {
                                required: true,
                                validate: {
                                    minLength: (v) => v.length >= 4
                                }
                            })}
                    />
                    {errors.fullname?.type === 'required' && (<small>Username is required</small>)}
                    {errors.fullname?.type === 'minLength' && "Enter 4 char"}
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor='email'>Enter E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='enter email here'
                        {...register('email', {
                            required: 'This field is Required',
                            validate: {
                                matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                            },
                        })}
                    />
                    {errors.email && (<div>{errors.email.message}</div>)}

                </div>
                <div style={{ margin: '10px' }}>
                    <label htmlFor='phone'>Phone Nmber</label>
                    <input
                        type='number'
                        id='phone'
                        name='phone'
                        // required='This field is Required'
                        {...register('phone', {
                            required: 'This field is Required',
                            validate: {
                                maxLength: (v) =>
                                   v.length <= 10 || "The phone number should have at most 10 digit",
                                matchPattern: (v) => /^\+?[1-9][0-9]{7,14}$/.test(v) || "Phone number must be a valid ",
                            },
                        })}
                    />
                    {errors.phone?.message && (<small>{errors.phone.message}</small>)}
                </div>
                <div style={{ margin: '10px' }}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        {...register('password',{ 
                            required:'This field is Required',
                            validate:{
                                maxLength:(v)=>
                                  v.length<=10 || 'not more then 10 digit',
                                matchPattern: (v)=> /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Password must be valid'
                            }
                        })}
                    />
                    {errors.password?.message && (<small>{errors.password.message}</small>)}
                </div>
                <div style={{ margin: '10px' }}>
                    <label htmlFor='state'>Choose Your State</label>
                    <select id='state' name='state'  {...register('state',
                        { required: true })}>
                        <option value="Bihar">Bihar</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="UP">UP</option>
                    </select>
                </div>
                <div style={{ margin: '10px' }}>
                    <label htmlFor='gender'>Gender</label>
                    <div>
                        <input
                            type='radio'
                            id='mail'
                            value='male'
                            name='gender'
                            {...register('mail',
                                { required: true })}
                        />
                        <label htmlFor='male'>Male</label>
                    </div>
                </div>

                <div>
                    <input
                        type='radio'
                        id='female'
                        value='female'
                        name='gender'
                        {...register('female',
                            { required: true })}
                    />
                    <label htmlFor='female'>Male</label>
                </div>
                <div style={{ margin: '10px' }}>
                    <input type='checkbox' id='tnc' name='tnc' {...register('tnc',
                        { required: true })} />
                    <label htmlFor='tnc'> I agree all terms & conditions</label>
                </div>
                <button type='submit'>Create New Account</button>
            </form>
        </div>
    )
}

export default ValidationError
