import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/products/products';
import ArticleDetails from './pages/articleDetails/articleDetails';
import Cart from './pages/cart/cart';
import { FilterByProvider } from './context/filter-context';
import { ShopContextProvider } from './context/cart-context';

function App() {
  return (
    <div className='App'>
      <FilterByProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/article/:userId' element={<ArticleDetails />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
            <Footer/>
        </Router>
      </ShopContextProvider>
     </FilterByProvider>
    </div>
  );
}

export default App;
