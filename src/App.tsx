import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DharaSection from './components/DharaSection';
import Specialization from './components/Specialization';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const checkReveal = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        observer.observe(el);
      });
    };

    // Initial check
    checkReveal();
    const interval = setInterval(checkReveal, 800);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Stats />
        <DharaSection />
        <Specialization />
        <Services />
        <Benefits />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="premium-gradient-text">सोसायटी एवं एनजीओ सलाहकार</span>
              <p>हितेंद्र सिंह भदौरिया - उज्जैन (मध्य प्रदेश)</p>
            </div>
            <div className="footer-legal">
              <p>© 2026 सर्वाधिकार सुरक्षित।</p>
              <div className="footer-links">
                <a href="#services">सेवाएं</a>
                <a href="#contact">संपर्क</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
        }
        main {
          display: flex;
          flex-direction: column;
        }
        .footer {
          padding: 5rem 0 3rem;
          border-top: 1px solid var(--glass-border);
          background: rgba(10, 5, 16, 0.8);
          backdrop-filter: blur(10px);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }
        .footer-brand h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .footer-brand p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .footer-legal {
          text-align: right;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .footer-links {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
          gap: 1.5rem;
        }
        .footer-links a {
          color: var(--text-main);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .footer-content { flex-direction: column; align-items: center; text-align: center; }
          .footer-legal { text-align: center; }
          .footer-links { justify-content: center; }
        }
      `}</style>
    </div>
  );
}

export default App;
