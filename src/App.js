import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import UpdateProducts from './Components/UpdateProducts';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Protected from './Components/Protected';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Protected cmp={Home} />}></Route>
          <Route path="/Login"  element={<Protected cmp={Login} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Add_product" element={<Protected cmp={AddProduct} />}></Route>
          <Route path="/update_product" element={<Protected cmp={UpdateProducts} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;