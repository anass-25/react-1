import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ProductForm from '../components/ProductForm/ProductForm';
import productService from '../services/productService';

const { getProducts, createProduct, deleteProduct } = productService;


const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Charger les produits au montage du composant
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Erreur lors du chargement des produits :', error);
        }
    };

    const handleAddProduct = async (newProduct) => {
        try {
            await createProduct(newProduct);
            fetchProducts(); // Actualise la liste
            setShowForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout d\'un produit :', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts(); // Actualise la liste
        } catch (error) {
            console.error('Erreur lors de la suppression d\'un produit :', error);
        }
    };

    return (
        <div>
            <h1>Gestion des Produits</h1>
            {!showForm && <button onClick={() => setShowForm(true)}>Ajouter un produit</button>}
            {showForm && <ProductForm onSubmit={handleAddProduct} onCancel={() => setShowForm(false)} />}
            <ProductList products={products} onDelete={handleDeleteProduct} />
        </div>
    );
};

export default ProductPage;
