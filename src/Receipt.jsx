import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className = "receipt-item" key = {item.name}>
        <div className = "receipt-text"> 
          {item.productName} x {item.count}
        </div>
        <div className = "receipt-text"> ${(item.price * item.count).toFixed(2)}</div>
      </div>
    );
  }

  totalCosts(items) {
    var total = 0;

    for (var i = 0; i < items.length; i++) {
      var p = items[i]['price'] * items[i]['count'];
      total = total + p;
    }
    return total;
  }

  
  render() {
    const items = this.props.items;
    console.log(items)
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.totalCosts(items).toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;