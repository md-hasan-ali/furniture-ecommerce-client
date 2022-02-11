import React from 'react';
import { useState } from 'react';
import './makeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('https://still-thicket-39969.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    alert('Admin Created Successfully....!')
                } else {
                    alert('Already Created Admin...!')
                }
            })
        e.preventDefault();
    }
    return (
        <div className="make-admin">
            <div className="section-title text-center">
                <h2 className='mb-5'>Make <span className='text-style'>Admin</span></h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                onBlur={handleOnBlur}
                                placeholder='Put admin email'
                            />
                            <button type="submit">Make Admin</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;