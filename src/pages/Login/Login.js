import React, { useState } from 'react';
import Navigarion from '../Sheard/Navigation/Navigarion';
import './login-form.css'
import loginImage from '../../images/login-image.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthProvider/useAuth';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, loadding, user, error, googleSign } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        console.log(loginData);

        loginUser(loginData?.email, loginData?.password, navigate, location)
        e.preventDefault();
    }

    return (
        <div>
            <Navigarion></Navigarion>

            <div className="login-area my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            {
                                user?.email &&
                                <div class="alert alert-primary" role="alert">
                                    Your Account Login Successfully...!
                                </div>
                            }
                            {
                                error &&
                                <div class="alert alert-warning" role="alert">
                                    {error}!
                                </div>
                            }
                            {!loadding && <div className="login-form">
                                <h2 className='text-danger mb-4'>Please Login.</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        placeholder='your email'
                                        name='email'
                                        onChange={handleOnChange}
                                    />
                                    <input
                                        type="password"
                                        placeholder='password'
                                        name='password'
                                        onChange={handleOnChange}
                                    />
                                    <button
                                        className='btn btn-success box-button'
                                        type='submit'
                                    >Please Login
                                    </button>
                                </form>

                                <Link to='/registration'>
                                    <button style={{ border: 'none', background: 'none', marginTop: '10px', fontSize: '20px', color: 'teal' }}>New User ? Please Registration</button>
                                </Link>

                                <p className='mt-2'> ------------ OR ------------ </p>
                                <button onClick={googleSign} className='btn btn-primary box-button me-2'>Google Signin <i className="fab fa-google"></i></button>
                                <button className='btn btn-danger box-button'>GitHub Signin <i class="fab fa-github"></i></button>

                            </div>}


                            {
                                loadding &&
                                <div className="text-center">
                                    <Spinner size="xl" animation="border" variant="danger" />
                                </div>
                            }

                        </div>
                        <div className="col-md-7">
                            <div className="login-image">
                                <img className='w-100' src={loginImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;