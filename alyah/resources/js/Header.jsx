import React, { useState } from 'react';
import '../css/Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import logo from '/home/fahim/Alyah/frontend/src/asserts/images/alyah.jpg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for password visibility

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSignInClick = () => {
        setIsModalOpen(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (email === 'adem1994@gmail.com' && password === '12345678') {
            window.location.href = '/signin';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Alyah Software" />
                    </a>
                </div>
                <div className={`menu-toggle ${menuOpen ? 'open' : 'close'}`} onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
                    ) : (
                        <>
                            <div></div>
                            <div></div>
                            <div></div>
                        </>
                    )}
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#technology">TECHNOLOGY</a></li>
                    <li><a href="#software">SOFTWARE</a></li>
                    <li><a href="#apps">APPS</a></li>
                    <li><a href="#games">GAMES</a></li>
                    <li><a href="#podcast">PODCASTS</a></li>
                    {menuOpen && (
                        <li className="actions-mobile">
                            <a href="#subscribe" className="subscribe-btn">Subscribe</a>
                            <button onClick={handleSignInClick} className="sign-in-btn">Sign In</button>
                            <button className="search-icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </li>
                    )}
                </ul>
                <div className="actions">
                    <a href="#subscribe" className="subscribe-btn">Subscribe</a>
                    <button onClick={handleSignInClick} className="sign-in-btn">Sign In</button>
                    <button className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </nav>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Sign In</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <div className="password-container">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;