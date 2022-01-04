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

// App functional Component 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/allProducts' element={<AllProduct />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
