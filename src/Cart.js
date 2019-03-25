import React from "react";
import Product from "./Product.js";
import "./styles/cart.css";
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <h2>
              <Product 
                productName = "Apple"
                price = "1"
                limit = {100}/>
              <Product 
                productName = "Banana"
                price = {0.5}
                limit = {20}/>
              <Product 
                productName = "Orange"
                price = {2}
                limit = {5}/>
              <Product 
                productName = "Durian"
                price = {5}
                limit = {0}/>
            </h2>
        </div>
    );
  }

}

export default Cart;
