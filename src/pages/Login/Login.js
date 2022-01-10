import React, { useState } from 'react';
import Navigarion from '../Sheard/Navigation/Navigarion';
import './login-form.css'
import loginImage from '../../images/login-image.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        console.log(loginData);

        e.preventDefault();
    }
    return (
        <div>
            <Navigarion></Navigarion>

            <div className="login-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="login-form">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name='email'
                                        onChange={handleOnChange}
                                    />
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleOnChange}
                                    />
                                    <button
                                        className='btn btn-success box-button'
                                        type='submit'
                                    >Login
                                    </button>
                                </form>
                                <Link to='/registration'>
                                    <button style={{ border: 'none', background: 'none', marginTop: '10px', fontSize: '20px', color: 'teal' }}>New User ? Please Registration</button>
                                </Link>
                            </div>
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