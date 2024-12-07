import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';


const App = () => {
    return (
        <Router>
            <Header /> {/* Le Header doit être ici, en dehors des Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};
export default App;
