import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import UpdateProducts from './Components/UpdateProducts';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Add_product" element={<AddProduct />}></Route>
          <Route path="/update_product" element={<UpdateProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
