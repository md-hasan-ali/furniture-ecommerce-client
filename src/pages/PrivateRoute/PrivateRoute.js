import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../contexts/AuthProvider/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loadding } = useAuth();
    const location = useLocation();

    if (loadding) {
        return (
            <div className="text-center">
                <Spinner size="xl" animation="border" variant="danger" />
            </div>
        );
    }
    return (
        user?.email ? children : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;




// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../../contexts/AuthProvider/useAuth';

// const PrivateRoute = ({ children }) => {
//     const { user } = useAuth();
//     let location = useLocation();

//     if (!user.user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default PrivateRoute;