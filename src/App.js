import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/authentication/login';
import Products from './pages/products/products';
import Navbar from './pages/navbar/navbar';
import RequireAuth from './pages/authentication/requireAuth';
import ProductsDetails from './pages/products/productsDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="products" element={<Products />}>
        </Route>
        <Route path="products/:id" element={<ProductsDetails></ProductsDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
