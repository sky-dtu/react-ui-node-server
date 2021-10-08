import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover'
import Product from './components/products/Product';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Cover />
    <Product />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
