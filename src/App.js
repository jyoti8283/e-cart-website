// import react from "react";
import './App.css';
import Navbar from "./componenet/Navbar";
import Home from "./componenet/Home";
import {Switch,Route} from 'react-router-dom';
import Products from "./componenet/Products";
import Product from "./componenet/Product";
import Cart from "./componenet/Cart";
import About from "./componenet/About";
import Contact from "./componenet/Contact";
import Login from "./componenet/Login";
import Signup from "./componenet/Signup";
import Checkout from "./componenet/Checkout";






 function App() {
   return(
     <>
       <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/products" component={Products} />
         <Route exact path="/products/:id" component={Product} />
       <Route exact path="/cart" component={Cart} />
         <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
        </Switch>
      
    </>
  
      //  <Home />
       /* <Products/> */
    //  </>

   );
   
 };
 export default App;
