import React from 'react';

const services = [
  {
    title: "समिति/एनजीओ पंजीकरण",
    description: "धारा 27/28 की जानकारी के साथ समिति और एनजीओ के ऑनलाइन पंजीकरण एवं संशोधन संबंधित सभी कार्य।",
    features: ["पंजीकरण", "संशोधन", "दस्तावेजीकरण"]
  },
  {
    title: "ऑडिट एवं अनुपालन",
    description: "समिति, एनजीओ, स्कूल और कॉलेज के समस्त ऑडिट कार्य और कानूनी अनुपालन सुनिश्चित करना।",
    features: ["वार्षिक ऑडिट", "अनुपालन"]
  },
  {
    title: "धारा 21 संबंधित कार्य",
    description: "धारा 21 के तहत भूमि क्रय, लीज, भूमि दान एवं विक्रय की अनुमति से संबंधित सभी कार्य।",
    features: ["भूमि अनुमति", "लीज दस्तावेज़", "विक्रय परामर्श"]
  },
  {
    title: "परामर्श सेवाएँ",
    description: "एनजीओ और सोसायटियों के बेहतर प्रबंधन के लिए विशेषज्ञ कानूनी और प्रशासनिक परामर्श।",
    features: ["कानूनी सलाह", "प्रबंधन", "रणनीति"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">हमारी <span className="premium-gradient-text">विशेषज्ञता</span> के क्षेत्र</h2>
          <p className="section-subtitle">हम आपके संस्थान के सफल संचालन के लिए हर कदम पर आपके साथ हैं</p>
        </div>
        <div className="grid grid-2">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-morphism reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {index === 0 && '📜'}
                {index === 1 && '📊'}
                {index === 2 && '🏠'}
                {index === 3 && '🤝'}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .services {
          padding: 8rem 0;
          background: linear-gradient(to bottom, transparent, rgba(157, 59, 255, 0.05), transparent);
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
        }
        .service-card {
          padding: 3rem;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .service-card-title {
          font-size: 1.8rem;
          color: var(--text-main);
        }
        .service-card-desc {
          color: var(--text-muted);
          line-height: 1.7;
        }
        .service-features {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: auto;
        }
        .service-features li {
          background: rgba(157, 59, 255, 0.1);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; }
          .service-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Services;
