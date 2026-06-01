import React from 'react';
import Header from './components/Header';
import Product from './pages/Product'; // Mudança feita aqui!
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        {/* Chamando o novo componente */}
        <Product /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;