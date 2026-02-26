import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="premium-gradient-text">सोसायटी एवं एनजीओ सलाहकार</span>
        </div>

        <nav className={`desktop-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>सेवाएं</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>हमारे बारे में</a>
          <a href="#contact" className="cta-button" onClick={() => setIsMenuOpen(false)}>
            <Phone size={18} />
            <span>संपर्क करें</span>
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''} glass-morphism`}>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>सेवाएं</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>हमारे बारे में</a>
        <a href="https://wa.me/919826045481" className="cta-button">
          <MessageSquare size={18} />
          <span>व्हाट्सप्प</span>
        </a>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header.scrolled {
          padding: 1rem 0;
          background: rgba(10, 5, 16, 0.85);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid var(--glass-border);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          position: relative;
          z-index: 1001;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .desktop-nav a {
          color: var(--text-main);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .desktop-nav a:hover:not(.cta-button) {
          color: var(--primary);
        }
        .menu-toggle {
          display: none;
          background: none;
          color: var(--text-main);
          z-index: 1001;
        }
        .mobile-nav {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          z-index: 1000;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-nav.open {
          transform: translateY(0);
          display: flex;
        }
        .mobile-nav a {
          font-size: 1.5rem;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
        }
        @media (max-width: 1024px) {
          .desktop-nav { gap: 1.5rem; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .menu-toggle { display: block; }
          .logo { font-size: 1.2rem; }
        }
      `}</style>
    </header>
  );
};

export default Header;
