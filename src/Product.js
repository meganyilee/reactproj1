import React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 1
        };
    }
    
    addToCart = () => {
        //eventlistener click on add to cart 
        //
        if (this.state.count > this.props.limit) {
            alert("There are too many " + this.props.productName + " in your cart!")
        } else if (this.props.limit == 0) {
            alert("This item is out of stock!")
        } else {
            this.setState({count: this.state.count + 1});
            alert("There are " + this.state.count + " " + this.props.productName + " in your cart!")
        }
    }
    

    render() {return(

    <div class="ui cards">
    <div class="card">
        <div class="content">
        <div class="header">{this.props.productName}</div>
        <div class="description">
            Price: ${this.props.price}
        </div>
        </div>
        <div class="ui bottom attached button" onClick = {this.addToCart}>
        <i class="add icon"></i>
        Add to Cart
        </div>
    </div>
    </div>)
    }
};



export default Product;