import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/logo-black.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'О компании', href: '#about' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Каталог', href: '#catalog' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed-top ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease',
        zIndex: 1000,
      }}
    >
      <nav className="container navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img
            src={logoBlack}
            alt="НЕПТУН"
            style={{
              height: '50px',
              width: 'auto',
              transition: 'all 0.3s ease',
            }}
          />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: isScrolled ? '#0066cc' : '#fff' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link"
                  href={link.href}
                  style={{ color: isScrolled ? '#333' : '#fff' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
