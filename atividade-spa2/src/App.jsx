import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './pages/Services';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;