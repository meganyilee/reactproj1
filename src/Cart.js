import React from "react";
import Product from "./Product.js";
import "./styles/cart.css";
import ProductData from "./Data"
import Receipt from "./Receipt.jsx"

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cartItems: []
    }
  }

  handleAddToCart(name, price) {
    var copyCartItems = [...this.state.cartItems];
    var newitem = true;

    for (var i = 0; i < copyCartItems.length; i++) {
      if (copyCartItems[i]['productName'] === name) {
        copyCartItems[i]['count'] += 1;
        newitem = false;
      }
    }

    if (newitem === true) {
      copyCartItems.push({productName:name, price: price, count: 1})
    }

    this.setState({
      cartItems: copyCartItems,
    });
    
  }

  handleRemoveFromCart(name) {
    var x = [...this.state.cartItems];
    var remove = 0;

    for (var i = 0; i < x.length; i++) {
      if (x[i]['productName'] === name) {
        if (x[i]['count'] === 1) {
          remove = i;
        } 
      }
    }

    if (x[remove]['count'] === 1) {
      x.splice(remove, 1);
      console.log(x)
    } else {
      console.log("why wont this work")
      x[remove]['count'] -= 1;
    }

    this.setState({
      cartItems: x,
    });
    
  }

  render() {
    return (
        <div className="page-content">
            <h2>
              {ProductData.products.map((item) => (
                <Product productName={item.name} price={item.cost}
                onAddToCart={() => this.handleAddToCart(item.name, item.cost)}
                removeFromCart={() => this.handleRemoveFromCart(item.name)}

                />

              ))}
            </h2>
            <Receipt items = {this.state.cartItems} />
        </div>
    );
  }

}

export default Cart;
