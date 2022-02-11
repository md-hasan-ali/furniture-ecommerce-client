import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deleteCount, setDeletedCount] = useState(null)
    useEffect(() => {
        fetch('https://still-thicket-39969.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [deleteCount])

    // delete single id
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`https://still-thicket-39969.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeletedCount(true)
                    } else {
                        setDeletedCount(false)
                    }
                })
        }
    }
    return (
        <div className='mt-5'>
            <div className="section-title text-center">
                <h2 className='mb-5'>Manage All <span className='text-style'>Orders</span></h2>
            </div>
            <Table responsive striped bordered hover variant="dark">
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
                    manageOrders.map((order, index) =>
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
                                    <button onClick={() => handleDelete(order?._id)} className='btn btn-danger'> Delete <i className="fas fa-trash-alt"></i></button>
                                </td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default ManageOrders;