import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
        <div className="home-page">
            <h1>Bienvenue dans l'application de gestion des produits</h1>
            <p>
                Cette application vous permet de gérer vos produits efficacement. 
                Vous pouvez ajouter, consulter, modifier ou supprimer des produits en toute simplicité.
            </p>
            <div className="home-buttons">
                <Link to="/products" className="btn">
                    Voir la liste des produits
                </Link>
            </div>
        </div>
    );
};

export default Home;
