// Import Necessary file 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import About from './pages/AboutUs/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import AllProduct from './pages/AllProducts/AllProduct';
import PlaceOrderModal from './pages/PlaceOrderModal/PlaceOrderModal';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './pages/Dashboard/AddProduc/AddProduct';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import Payment from './pages/Dashboard/Payment/Payment';

// App functional Component 
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='allProducts' element={<AllProduct />} />
            <Route path='productsDetail/:id' element={<PrivateRoute><PlaceOrderModal /></PrivateRoute>} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
            {/* Nested Route */}
            <Route path='dashboard' element={<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>}>
              <Route path='manageOrders' element={<ManageOrders></ManageOrders>} />
              <Route path='manageProducts' element={<ManageProducts></ManageProducts>} />
              <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>} />
              <Route path='addNewProduct' element={<AddProduct></AddProduct>} />
              <Route path='myOrders' element={<MyOrders></MyOrders>} />
              <Route path='addRebiew' element={<AddReview></AddReview>} />
              <Route path='payment' element={<Payment></Payment>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
