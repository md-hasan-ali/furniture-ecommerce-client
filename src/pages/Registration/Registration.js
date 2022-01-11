import React, { useState } from 'react';
import Navigarion from '../Sheard/Navigation/Navigarion';
import loginImage from '../../images/login-image.jpg'
import './registration.css'
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/AuthProvider/useAuth';
import { Spinner } from 'react-bootstrap';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, loadding } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('please put your correct password');
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <Navigarion></Navigarion>

            <div className="registration-component">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            {!loadding && <div className="registration">
                                <h2 className='text-danger mb-4'>Please Register.</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder='your Name'
                                        name="name"
                                        onChange={handleOnChange}
                                    />
                                    <input
                                        type="email"
                                        placeholder='your Email'
                                        name="email"
                                        onChange={handleOnChange}
                                    />
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        name="password"
                                        onChange={handleOnChange}
                                    />

                                    <input
                                        placeholder='confirm_password'
                                        type="password"
                                        name="confirm_password"
                                        onChange={handleOnChange}
                                    />
                                    <button type='submit' className='btn btn-success box-button'>Please Register</button>
                                </form>
                                <Link to='/login'>
                                    <button style={{ border: 'none', background: 'none', marginTop: '10px', fontSize: '20px', color: 'teal' }}>New User ? Please Registration</button>
                                </Link>
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

export default Registration;