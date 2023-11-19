import "./App.css";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Products from "./component/Products/Products";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Newsletter from "./component/Newsletter/Newsletter";
import AddToCard from "./component/AddToCard/AddToCard";
import Detalis from "./component/Detalis/Detalis";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<>
         <Home/>
         <Products/>
          <Shop/>
        </>}/>

        <Route path="card" element={<AddToCard/>}/>
        <Route path=":productid" element={<Detalis/>}/>

      </Routes>
      <Newsletter/>
      <Footer/>
    </>
   
  );
}

export default App;
