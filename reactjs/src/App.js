import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Checkout from './routes/checkout';
import Product from './routes/product';
import Categories from './routes/categories';
import Home from './routes/home';
import Cart from './routes/cart';
import Purchased from './routes/purchased';
import ProductForm from './components/forms/productForm';

// Import the store
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/product'} element={ <Product /> } />
            <Route path={'/product/new'} element={ <ProductForm />} />
            <Route path={'/product/edit/:id'} element={ <ProductForm />} />
            <Route path={'/cart'} element={ <Cart /> } />
            <Route path={'/checkout'} element={ <Checkout /> } />
            <Route path={'/categories'} element={ <Categories /> } />
            <Route path={'/purchased'} element={ <Purchased /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
