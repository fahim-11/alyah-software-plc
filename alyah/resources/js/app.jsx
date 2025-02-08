import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Admin from './Admin';

const App = () => {
    const location = useLocation();

    // Hide Header and Footer on /signin route
    const showHeaderFooter = location.pathname !== '/signin';

    return (
        <div>
            {showHeaderFooter && <Header />}
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/signin" element={<Admin />} />
            </Routes>
            {showHeaderFooter && <Footer />}
        </div>
    );
};

const Root = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.createRoot(document.getElementById('app')).render(<Root />);
