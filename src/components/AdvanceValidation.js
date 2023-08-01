import React from 'react'
import { useForm } from 'react-hook-form'

const AdvanceValidation = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm(
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
                    <label htmlFor='Confpassword'>Conform Password</label>
                    <input
                        type='password'
                        id='Confpassword'
                        name='Confpassword'
                        {...register('Confpassword',{ 
                            required:'This field is Required',
                            validate:{
                                maxLength:(v)=>
                                  v.length<=10 || 'not more then 10 digit',
                                 matchPattern: (v)=> v=== getValues('password') || "password dose not match",
                                // value:(value)=> value === getValues('password') || "password dose not match"
                            }
                        })}
                    />
                    {errors.Confpassword?.message && (<small>{errors.Confpassword.message}</small>)}
                </div>
                {/* <button type='button' onClick={()=>console.log(getValues())}>Get All Values</button> */}
                <button type='submit'>Create New Account</button>
                <input type="reset" value="Standard Reset Field Values" />
      {/* <input
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      /> */}
            </form>
        </div>
    )
}

export default AdvanceValidation
