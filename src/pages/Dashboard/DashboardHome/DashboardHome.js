import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';
import './DashboardHome.css'

const DashboardHome = () => {
    const { logout, admin } = useAuth();

    return (
        <div>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <Link className='home me-2' to='/'> <i class="fas fa-home"></i> Home page</Link>
                <Link className='home' to='/allProducts'><i class="fab fa-product-hunt"></i> All Product</Link>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 m-0 p-0">
                        <div className="dashboard-menu">
                            <h2>Dashboard Menu</h2>

                            {admin ?
                                <>
                                    <div className="d-menu">
                                        <Link to='manageOrders'>
                                            <button><i className="fas fa-tasks"></i> Manage Orders</button>
                                        </Link>
                                    </div>

                                    <div className="d-menu">
                                        <Link to='manageProducts'>
                                            <button> <i className="fas fa-sort-amount-up-alt"></i> Manage Product</button>
                                        </Link>
                                    </div>
                                    <div className="d-menu">
                                        <Link to='makeAdmin'>
                                            <button> <i className="fas fa-user-plus"></i> Make Admin</button>
                                        </Link>
                                    </div>
                                    <div className="d-menu mb-3">
                                        <Link to='addNewProduct'>
                                            <button> <i class="fas fa-th-list"></i> Add New Product</button>
                                        </Link>
                                    </div>
                                </> :
                                <>
                                    <div className="d-menu">
                                        <Link to='myOrders'>
                                            <button> <i class="fab fa-intercom"></i> My Orders</button>
                                        </Link>
                                    </div>
                                    <div className="d-menu">
                                        <Link to='addRebiew'>
                                            <button> <i class="fas fa-star"></i> Add Review</button>
                                        </Link>
                                    </div>

                                    <div className="d-menu mb-3">
                                        <Link to='payment'>
                                            <button> <i class="fab fa-cc-amazon-pay"></i> Payment</button>
                                        </Link>
                                    </div>
                                </>
                            }

                            <Link to='/' className='d-menu ms-2 dashboard-logout-btn'>
                                <i className="fas fa-sign-out-alt text-white"></i> <button style={{ color: '#95CD41' }} onClick={logout}>Logout</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h2>Dashboard Content Here ..</h2>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;