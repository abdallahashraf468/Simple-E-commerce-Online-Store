import '../src/css/App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import Products from './component/Products'; 
import Product from './component/Product';
import Cart from "./component/Cart"; 
import Login from "./component/Login";
import Register from "./component/Register";
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
 
function App() {
  return (
   <>

   <Navbar />
                              {/* Switch */}
       <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/products" element={<Products />} />
           <Route exact path="/products/:id" element={<Product />} />
           <Route exact path="/cart" element={<Cart />} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/register" element={<Register />} />
           <Route exact path="/contact" element={<Contact />} />
           <Route exact path="/about" element={<About />} />
       </Routes> 
       
         <Footer/>

   </>
  );
}


export default App;
