import React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
            <div class="ui bottom attached button" onClick = {() => 
                {this.props.onAddToCart()}}>
            <i class="add icon"></i>
            Add to Cart
            </div>
            <div className="ui bottom attached button" onClick={this.props.removeFromCart}>
            <i className="remove icon"></i>
            Remove From Cart
          </div>
            
        </div>
        </div>)
    }
};



export default Product;