import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../contexts/AuthProvider/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    console.log(myOrders);

    return (
        <div className='mt-5'>
            <div className="section-title text-center">
                <h2 className='mb-4'>My <span className='text-style'>Orders</span> </h2>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Products Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    myOrders.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>
                                    <button className='btn btn-success'>{order.status}</button>
                                </td>
                                <td>
                                    {/* <button onClick={() => handleUpdate(order._id)} className='btn btn-info me-2'>Update <i className="fas fa-edit"></i></button>
                                    */}
                                    <button onClick={() => handleDelete(order._id)} className='btn btn-danger'> Delete <i className="fas fa-trash-alt"></i></button>
                                </td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default MyOrders;