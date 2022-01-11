import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Contact Me!!</h2>
                        <p><strong>Email</strong>: hasanaliringku@gmail.com</p>
                        <p><strong>Location</strong>: Baliadangi, Thakurgaon, Bangladesh</p>
                        <Link to='/contact'>
                            <button className='btn btn-success'>Contact Me!</button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <h2>About Me!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ab libero eum praesentium saepe. Iure quasi omnis sapiente.</p>
                        <Link to='/about'>
                            <button className='btn btn-danger'>About Me!</button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <h2 className='mb-4'>Social Icon!!</h2>
                        <div className="social-icon">
                            <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/in/md-hasan-ali-764547219/" target='_blank'><i className="fab fa-linkedin"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-git-square"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
                        </div>

                        <button className='btn btn-success'>Contact Me!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;