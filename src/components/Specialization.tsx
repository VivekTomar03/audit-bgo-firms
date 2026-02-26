import React from 'react';
import { Target, Users, BookOpen, Building2, Briefcase, GraduationCap } from 'lucide-react';

const Specialization: React.FC = () => {
  const specializations = [
    { name: "समितियाँ", icon: <Users size={24} />, description: "सामाजिक एवं धार्मिक समितियाँ" },
    { name: "एनजीओ", icon: <Target size={24} />, description: "गैर-सरकारी संगठन" },
    { name: "स्कूल", icon: <GraduationCap size={24} />, description: "शैक्षणिक संस्थान" },
    { name: "कॉलेज", icon: <Building2 size={24} />, description: "उच्च शिक्षा संस्थान" },
    { name: "संस्थाएं", icon: <Briefcase size={24} />, description: "निजी एवं सार्वजनिक संस्थाएं" },
    { name: "ट्रस्ट", icon: <BookOpen size={24} />, description: "धार्मिक एवं परोपकारी ट्रस्ट" },
  ];

  return (
    <section className="specialization">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">हमारी <span className="premium-gradient-text">विशेषज्ञता</span> के क्षेत्र</h2>
          <p className="section-subtitle">हम इन विभिन्न क्षेत्रों में अपनी सेवाएँ प्रदान करते हैं</p>
        </div>

        <div className="spec-diagram-container reveal">
          <div className="spec-center glass-morphism">
            <span className="premium-gradient-text">एनजीओ विशेषज्ञ</span>
          </div>
          <div className="spec-items">
            {specializations.map((spec, index) => (
              <div key={index} className={`spec-item spec-${index} glass-morphism reveal`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="spec-icon">{spec.icon}</div>
                <div className="spec-text">
                  <span className="spec-name">{spec.name}</span>
                  <span className="spec-desc">{spec.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .specialization {
          padding: 8rem 0;
          background: radial-gradient(circle at center, rgba(157, 59, 255, 0.03) 0%, transparent 70%);
          overflow: hidden;
        }
        .spec-diagram-container {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 4rem;
        }
        .spec-center {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          text-align: center;
          padding: 1rem;
          box-shadow: 0 0 50px rgba(157, 59, 255, 0.2);
          z-index: 10;
          border: 2px solid var(--primary);
          background: var(--bg-deep);
        }
        .spec-items {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spec-item {
          position: absolute;
          padding: 1.2rem 2rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          min-width: 280px;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0;
          transform: translate(0, 0) scale(0.8);
          z-index: 5;
        }
        .spec-item.active {
          opacity: 1;
        }
        .spec-item:hover {
          transform: scale(1.05) !important;
          border-color: var(--primary);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          z-index: 20;
        }
        .spec-icon {
          background: rgba(157, 59, 255, 0.1);
          color: var(--primary);
          padding: 0.8rem;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .spec-text {
          display: flex;
          flex-direction: column;
        }
        .spec-name {
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-main);
        }
        .spec-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Circular Placement with active animation support */
        .spec-0.active { transform: translate(320px, -200px) scale(1); }
        .spec-1.active { transform: translate(380px, 0px) scale(1); }
        .spec-2.active { transform: translate(320px, 200px) scale(1); }
        .spec-3.active { transform: translate(-320px, 200px) scale(1); }
        .spec-4.active { transform: translate(-380px, 0px) scale(1); }
        .spec-5.active { transform: translate(-320px, -200px) scale(1); }

        @media (max-width: 1200px) {
          .spec-item { min-width: 240px; padding: 1rem 1.5rem; }
          .spec-0.active { transform: translate(250px, -180px) scale(1); }
          .spec-1.active { transform: translate(300px, 0px) scale(1); }
          .spec-2.active { transform: translate(250px, 180px) scale(1); }
          .spec-3.active { transform: translate(-250px, 180px) scale(1); }
          .spec-4.active { transform: translate(-300px, 0px) scale(1); }
          .spec-5.active { transform: translate(-250px, -180px) scale(1); }
        }

        @media (max-width: 1024px) {
          .spec-diagram-container { height: auto; display: block; margin-top: 3rem; }
          .spec-center { display: none; }
          .spec-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .spec-item {
            position: static;
            transform: none !important;
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .spec-items { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Specialization;
