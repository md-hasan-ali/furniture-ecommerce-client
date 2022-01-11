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
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
