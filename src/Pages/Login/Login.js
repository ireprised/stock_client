import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {


    const { register, handleSubmit} = useForm();
    const {error,setError,handleUserLogin} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/admin'

    
    const onSubmit = data => {
        handleUserLogin(data.email,data.password)
        .then((result) => {
          history.push(redirect_url)
      })
      .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
          alert(errorMessage)
      });
      };

    return (
        <Container className="login_background">
            <div className="container-fluid p-0">
                <div className="login_container">
                    <div className="row login_form">
                        <div className="col-12 col-md-6 p-0 m-0 column-1">
                            <img src={ error ? "https://thumbs.gfycat.com/FluidFlimsyAuk-max-1mb.gif" : "https://thumbs.dreamstime.com/b/account-login-password-key-computer-man-near-vector-male-character-design-concept-landing-page-web-poster-banner-184009994.jpg"} alt="" className="w-75 h-50"/>
                        </div>
                        <div className="col-12 col-md-6 p-0 m-0 column-2">
                            <div className="d-flex align-items-center justify-content-center h-100 w-100 p-3">
                                <div className='w-100'>
                                    <form className="text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                                        <h5 className="mb-5">Login as admin user</h5>
                                        <input placeholder='Your Email' className='form-control rounded-pill p-2' {...register("email")} /><br/>
                                        <input placeholder='Your Password'  className='form-control rounded-pill p-2' {...register("password", { required: true })} /><br/>
                                        <input className='rounded-pill px-3 border-0 btn-primary py-2' value={'Login'} type="submit" />
                                    </form><br />
                                    <Link to="/register">new user?</Link>
                                    <p className='text-danger'>{error}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Login;