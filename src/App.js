import React, { Component } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
export default App;
