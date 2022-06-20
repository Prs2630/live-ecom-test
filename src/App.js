import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Product from './components/Product/Product';
import {

  Routes,
  Route,
} from "react-router-dom";
import Showproduct from './components/Show/Showproduct';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      
      <Routes>
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/showproduct" element={<Showproduct />} />
      </Routes>
      

    </div>
    </>
  );
}

export default App;
