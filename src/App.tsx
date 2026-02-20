import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Header />
        <main>
          <Hero />
          <About />
          <Advantages />
          <Catalog />
          <Gallery />
          <ContactForm />
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
