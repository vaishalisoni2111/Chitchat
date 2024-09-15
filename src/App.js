import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategery from './pages/ShopCategery';
import Products from './pages/Products';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/' element={<Shop />} />
     <Route path='/mens' element={<ShopCategery categery="mens"/>} />
     <Route path='/womens' element={<ShopCategery categery="womens"/>} />
     <Route path='/kids' element={<ShopCategery categery="kids"/>} />
     <Route path="/product" element={<Products />} >
     <Route path=':productId' element={<Products />} />
     </Route>
     <Route path='/cart' element={<Cart/>} />
     <Route path='/cart' element={<LoginSignup />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
