import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    console.log("Header rendu"); // Vérifiez si ce message s'affiche dans la console
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">MyApp</Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/products">Produits</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
