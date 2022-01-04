import React from 'react';


const Contact = () => {
    return (
        <>

            <div className='contact-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mx-auto">
                            <div className="contact-form">
                                <form action="">
                                    <input type="text" placeholder='Frist Name' />
                                    <input type="text" placeholder='Last Name' />
                                    <input type="email" placeholder='Your Email Address' />
                                    <input type="password" placeholder='Your Password' />
                                    <textarea cols="30" rows="5" placeholder='Your Valueable Message'></textarea>
                                    <button type="submit">Send Message!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;