import React from 'react';
import { FileText, LandPlot, ShieldCheck, HelpCircle } from 'lucide-react';

const DharaSection: React.FC = () => {
  return (
    <section className="dhara-section">
      <div className="container">
        {/* Section 27/28 */}
        <div className="dhara-card glass-morphism reveal">
          <div className="dhara-header">
            <div className="dhara-badge">Section 27/28</div>
            <h2 className="dhara-title">समिति/एनजीओ की धारा <span className="premium-gradient-text">27/28</span> की जानकारी</h2>
          </div>
          <div className="dhara-content">
            <div className="dhara-info">
              <p>समितियों एवं गैर-लाभकारी संगठनों (NGOs) के लिए धारा 27 और 28 के तहत आवश्यक सभी कानूनी कार्यों का संचालन:</p>
              <ul className="dhara-list">
                <li><ShieldCheck size={18} /> आवेदन और दस्तावेजीकरण</li>
                <li><ShieldCheck size={18} /> कानूनी अनुपालन (Compliance)</li>
                <li><ShieldCheck size={18} /> समयबद्ध रिपोर्टिंग</li>
              </ul>
            </div>
            <div className="dhara-accent-box">
              <h3>मुख्य सेवाएँ</h3>
              <div className="accent-grid">
                <span>दस्तावेज़ संग्रहण</span>
                <span>आवेदन प्रक्रिया</span>
                <span>अनुमति प्राप्ति</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 21 */}
        <div className="dhara-card glass-morphism reveal" style={{ animationDelay: '0.2s' }}>
          <div className="dhara-header">
            <div className="dhara-badge">Section 21</div>
            <h2 className="dhara-title">धारा <span className="premium-gradient-text">21</span> के तहत भूमि संबंधित कार्य</h2>
          </div>
          <div className="dhara-content reverse">
            <div className="dhara-info">
              <p>धारा 21 के तहत भूमि क्रय, पट्टा (Lease), दान एवं अनुमति से संबंधित समस्त प्रशासनिक सेवाएँ:</p>
              <div className="dhara-grid">
                <div className="grid-item">
                  <LandPlot size={24} />
                  <span>भूमि क्रय/विक्रय</span>
                </div>
                <div className="grid-item">
                  <FileText size={24} />
                  <span>पट्टा (Lease)</span>
                </div>
                <div className="grid-item">
                  <ShieldCheck size={24} />
                  <span>दान एवं अनुमति</span>
                </div>
                <div className="grid-item">
                  <HelpCircle size={24} />
                  <span>विशेष परामर्श</span>
                </div>
              </div>
            </div>
            <div className="dhara-image-placeholder">
              <img
                src="https://i.pinimg.com/1200x/e9/57/ea/e957ea3f96b4221d0f4bc25e9a32ba5e.jpg"
                alt="Document Exchange"
                className="section-img"
              />
              <div className="img-overlay">
                <span>प्रशासकीय अनुमति सेवाएँ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .dhara-section {
          padding: 6rem 0;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .dhara-card {
          padding: 4rem;
          margin-bottom: 4rem;
          border-radius: 40px;
        }
        .dhara-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .dhara-title {
          font-size: 2.8rem;
          margin-bottom: 2.5rem;
          font-weight: 800;
        }
        .dhara-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .dhara-content.reverse {
          grid-template-columns: 0.8fr 1.2fr;
        }
        .dhara-info p {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .dhara-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .dhara-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-main);
        }
        .dhara-list li svg {
          color: var(--secondary);
        }
        .dhara-accent-box {
          background: rgba(157, 59, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 2.5rem;
          border-radius: 30px;
          text-align: center;
        }
        .dhara-accent-box h3 {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }
        .accent-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .accent-grid span {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.8rem;
          border-radius: 15px;
          font-weight: 600;
        }
        .dhara-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .grid-item {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
        }
        .grid-item:hover {
          background: rgba(157, 59, 255, 0.1);
          transform: translateY(-5px);
        }
        .grid-item svg {
          color: var(--primary);
        }
        .dhara-image-placeholder {
          height: 350px;
          background: #1e0f2d;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }
        .section-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          transition: transform 0.8s ease;
        }
        .dhara-card:hover .section-img {
          transform: scale(1.1);
          opacity: 0.8;
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top, rgba(10, 5, 16, 0.8), transparent);
        }
        .img-overlay span {
          font-weight: 800;
          font-size: 1.2rem;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        @media (max-width: 1024px) {
          .dhara-content, .dhara-content.reverse { grid-template-columns: 1fr !important; gap: 3rem; }
          .dhara-title { font-size: 2.2rem; }
          .dhara-card { padding: 2.5rem; }
        }
        @media (max-width: 768px) {
          .dhara-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default DharaSection;
