import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    // const {isSubmitting} = formState;

    const onSubmit = async data => {
        await wait(2000)
        console.log(data)
    }

    console.log(errors)
    
    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <h1>Inscription</h1>
            <div className="form-group mt-5 mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control is-invalid" id="username" name="username" {...register('username', {required: true})}></input>
                {errors.username && <span >Ahhhh ! T'es fou ... C'est pas un nom ça !! </span>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" name="email" {...register('email', {required: true})}></input>
                {errors.email && <span >Il nous faut .. un email .. un emaiiiiiiiiiiiiiil ! </span>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" {...register('password', {required: true})}></input>
                {errors.password && <span >Heu .. c'est pas possible ! </span>}
            </div>
            <button  className="btn btn-primary m-5">S'inscrire</button>
        </form>
    );
}

