import React, { Component } from 'react';
import './Product.css';

class ProductComponent extends Component {

  state = {
    data : []
  };

  componentDidMount() {
    this.callBackendAPI()
      // .then(res => this.setState({ data: res.express }))
      // .then(res => this.setState({ data: res[0].id }))
      .then(res => {
        const products = res.map( product => ({
          id    : product.id,
          url   : product.url,
          title   : product.productTitle,
          desc   : product.productDesc
        }));
        console.log(products);

        this.setState({ data : [...products] });
        console.log(this.state.data);
      })
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const arr = this.state.data;

    return (
      <div className="grid">
        <h2>OUR PRODUCT</h2>
        <div className="row product-grid">
          {arr.map(prod => {
            
            
            const html = 
              <div className="col eachProduct">
                <img src={prod.url} />
                <h3>{prod.title}</h3>
                <p className="p-Product">{prod.desc}</p>
              </div>;
            
            
            return html;
          })}  
        </div>
      </div>
    );
  }
}

export default ProductComponent;