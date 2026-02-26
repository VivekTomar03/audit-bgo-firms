import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <div className="hero-badge reveal" style={{ animationDelay: '0.1s' }}>
            <span className="badge-text">मध्य प्रदेश का विश्वसनीय सलाहकार</span>
          </div>
          <h1 className="hero-title reveal" style={{ animationDelay: '0.2s' }}>
            सोसायटी एवं <span className="premium-gradient-text">एनजीओ सलाहकार</span> सेवाएँ
          </h1>
          <p className="hero-subtitle reveal" style={{ animationDelay: '0.3s' }}>
            उज्जैन संभाग एवं पूरे मध्य प्रदेश में समितियों, एनजीओ, स्कूल एवं कॉलेजों के लिए पूर्ण स्पेक्ट्रम कार्य। हम आपके विज़न को हकीकत में बदलने में मदद करते हैं।
          </p>
          <div className="hero-actions reveal" style={{ animationDelay: '0.4s' }}>
            <a href="https://wa.me/919826045481" className="cta-button">
              <MessageSquare size={20} />
              <span>व्हाट्सप्प पर चैट करें</span>
            </a>
            <a href="#services" className="secondary-button">
              <span>हमारी सेवाएँ</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual reveal" style={{ animationDelay: '0.5s' }}>
          <div className="hero-blob"></div>
          <div className="hero-card glass-morphism">
            <div className="card-header">
              <h3>त्वरित सेवाएँ</h3>
            </div>
            <div className="card-inner">
              {[
                "आवेदन तैयारी",
                "दस्तावेजे संग्रह",
                "अनुमति प्राप्ति",
                "अनुपालन सुनिश्चित करना"
              ].map((item, i) => (
                <div key={i} className="card-item reveal" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <CheckCircle2 size={18} className="icon-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          padding: 12rem 0 8rem;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 5rem;
        }
        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(157, 59, 255, 0.1);
          border: 1px solid rgba(157, 59, 255, 0.3);
          border-radius: 50px;
          margin-bottom: 2rem;
        }
        .badge-text {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1;
          margin-bottom: 2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .hero-actions .cta-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
        }
        .secondary-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.03);
        }
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
          transform: translateX(5px);
        }
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          filter: blur(80px);
          opacity: 0.3;
          z-index: -1;
          animation: float 8s ease-in-out infinite;
        }
        .hero-card {
          padding: 2.5rem;
          width: 100%;
          max-width: 380px;
          border-radius: 30px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .card-header h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }
        .card-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .card-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
          font-size: 1.1rem;
        }
        .icon-check {
          color: var(--secondary);
          flex-shrink: 0;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @media (max-width: 1200px) {
          .hero-title { font-size: 3.5rem; }
        }
        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; gap: 4rem; }
          .hero-subtitle { margin: 0 auto 3rem; }
          .hero-actions { justify-content: center; }
          .hero-card { margin: 0 auto; }
          .hero-badge { margin-top: 2rem; }
        }
        @media (max-width: 768px) {
          .hero { padding: 8rem 0 4rem; }
          .hero-title { font-size: 2.75rem; }
          .hero-actions { flex-direction: column; gap: 1rem; }
          .hero-actions a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
