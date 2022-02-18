import React from 'react';
import { useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Registration = () => {


    const { register, handleSubmit} = useForm();
    const {error,handleUserRegister,setError,handleGoogle,setUser,updateProfile,auth} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    

    const onSubmit = data => {
        handleUserRegister(data.email,data.password)
        .then(result => {
            const newUser = result.user
            const newUserName = {...newUser}
            newUserName.displayName = data.name
            savedUser(data.name,data.email,data.password,'user')
            setUser(newUserName)
            updateProfile(auth.currentUser, {
                displayName: data.name
              }).then(() => {
                history.push(redirect_url)
              })
        }).catch((error)=>{
            setError(error.message)
            alert(error.message)
          })
    };

    const handleGoogleAndRedirect = () => {
        handleGoogle()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_url)
    })
    .catch((error) => {
        setError(error.message)
    });
   
    }



    const savedUser = (name,email,password,role) => {
        const user = {name,email,password,role:role}
        fetch('http://localhost:7000/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then()

    }


    return (
        <Container className="login_background">
            <div className="container-fluid p-0">
                <div className="login_container">
                    <div className="row login_form">
                        
                        <div className="col-12 col-md-6 p-0 m-0 column-1">
                            <div className="d-flex align-items-center justify-content-center h-100 w-100 p-3">
                                <div className='w-100'>
                                    <form className="text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                                        <h5 className="mb-5">Registration as new user</h5>
                                        <input placeholder='Your Name' className='form-control rounded-pill p-2' {...register("name")} /><br/> 
                                        <input placeholder='Your Email' className='form-control rounded-pill p-2' {...register("email")} /><br/> 
                                        <input placeholder='Your Password'  className='form-control rounded-pill p-2' {...register("password", { required: true })} /><br/>
                                        <input className='rounded-pill px-3 border-0 btn-primary py-2' value={'Registration'} type="submit" />
                                    </form><br />
                                    <Button className='rounded-pill px-3 border-0 btn-info' onClick={handleGoogleAndRedirect}>Google signup</Button>
                                    <p className='text-danger'>{error}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-12 col-md-6 p-0 m-0 column-2 d-flex align-items-center justify-content-center">
                            <img src="https://thumbs.dreamstime.com/b/account-login-password-key-computer-man-near-vector-male-character-design-concept-landing-page-web-poster-banner-184009994.jpg" alt="" className="w-75 h-50"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Registration;