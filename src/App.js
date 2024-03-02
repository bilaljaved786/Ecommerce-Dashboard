import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AddProduct from './Components/AddProduct';
import UpdateProducts from './Components/UpdateProducts';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Protected from './Components/Protected';
import GetAllProducts from './Components/GetAllProducts';
import Header from './Components/Header';
import './App.css';

function App() {

  useEffect(() => {
    console.log("Effect triggered App component");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Protected cmp={Home} />}></Route>
          <Route path="/Login" element={<Protected cmp={Login} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Add_product" element={<Protected cmp={AddProduct} />}></Route>
          <Route path="/update_product/:id" element={<Protected cmp={UpdateProducts} />}></Route>
          <Route path="/Get_All_products" element={<GetAllProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;