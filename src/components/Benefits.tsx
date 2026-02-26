import React from 'react';
import { Award, Zap, HeartHandshake, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "विशेषज्ञ मार्गदर्शन",
      desc: "एनजीओ और सोसायटियों के क्षेत्र में दशकों का अनुभव।",
      icon: <Award size={32} />
    },
    {
      title: "त्वरित निष्पादन",
      desc: "दस्तावेजीकरण और पंजीकरण की प्रक्रिया को कम से कम समय में पूरा करना।",
      icon: <Zap size={32} />
    },
    {
      title: "ट्रस्ट और विश्वसनीयता",
      desc: "मध्य प्रदेश के उज्जैन संभाग में हजारों संस्थानों द्वारा विश्वसनीय।",
      icon: <HeartHandshake size={32} />
    },
    {
      title: "लगातार उन्नति",
      desc: "हम केवल पंजीकरण नहीं बल्कि आपके संस्थान की भविष्य की प्रगति में भी सहायक हैं।",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <section className="benefits">
      <div className="container benefits-grid">
        <div className="benefits-content reveal">
          <h2 className="section-title">हमारी सेवाओं के <span className="premium-gradient-text">लाभ</span></h2>
          <p className="section-subtitle">हम आपके विज़न को हकीकत में बदलने के लिए समर्पित हैं</p>

          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item reveal" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-visual reveal" style={{ animationDelay: '0.4s' }}>
          <div className="visual-card glass-morphism">
            <div className="visual-image">
              <img
                src="https://i.pinimg.com/736x/c0/64/3d/c0643d29f09e65e5bb351ba41e0f3fc9.jpg"
                alt="Handshake"
                className="benefit-img"
              />
              <div className="overlay-text">पेशावर सेवाएँ</div>
            </div>
            <div className="visual-footer">
              <div className="v-stat">
                <span className="v-num">100%</span>
                <span className="v-label">संतुष्टि</span>
              </div>
              <div className="v-stat">
                <span className="v-num">24/7</span>
                <span className="v-label">सहायता</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .benefits {
          padding: 8rem 0;
          background: linear-gradient(to top, transparent, rgba(157, 59, 255, 0.03), transparent);
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }
        .benefits-content .section-title {
          text-align: left;
        }
        .benefits-list {
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .benefit-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        .benefit-icon-wrapper {
          background: var(--gradient-main);
          color: white;
          padding: 1.2rem;
          border-radius: 20px;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(157, 59, 255, 0.2);
        }
        .benefit-text h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }
        .benefit-text p {
          color: var(--text-muted);
          line-height: 1.6;
        }
        .visual-card {
          padding: 1.5rem;
          border-radius: 35px;
          overflow: hidden;
        }
        .visual-image {
          height: 450px;
          background: #1e0f2d;
          border-radius: 25px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .benefit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: transform 0.8s ease;
        }
        .benefits-visual:hover .benefit-img {
          transform: scale(1.05);
          opacity: 0.9;
        }
        .overlay-text {
          position: absolute;
          bottom: 2rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          opacity: 0.5;
        }
        .visual-footer {
          display: flex;
          justify-content: space-around;
          padding: 1rem 0;
        }
        .v-stat {
          text-align: center;
        }
        .v-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary);
        }
        .v-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: 1fr; gap: 4rem; }
          .benefits-visual { order: -1; }
          .benefits-content .section-title { text-align: center; }
          .benefits-content .section-subtitle { text-align: center; }
        }
        @media (max-width: 768px) {
          .benefit-item { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
