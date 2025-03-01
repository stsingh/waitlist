import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
// import ProductSection from './pages/ProductSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/products" component={ProductSection} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
