import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    // Format the WhatsApp message
    const waMessage = `नमस्ते! मेरा नाम ${name} है।\n\nविषय: ${subject}\n\nसंदेश: ${message}`;
    const encodedMessage = encodeURIComponent(waMessage);

    // Hitendra Singh Bhadauria's WhatsApp number
    const waNumber = '919826045481';
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid glass-morphism reveal">
          <div className="contact-info">
            <h2 className="contact-title">हमसे <span className="premium-gradient-text">संपर्क</span> करें</h2>
            <p className="contact-desc">हितेंद्र सिंह भदौरिया - उज्जैन (सोसायटी सलाहकार)</p>

            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <p className="info-label">मोबाइल नंबर</p>
                  <a href="tel:9826045481" className="info-value">98260-45481</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <p className="info-label">व्हाट्सप्प नंबर</p>
                  <a href="https://wa.me/919826045481" className="info-value">98260-45481</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <p className="info-label">व्हाट्सप्प नंबर ( "कृतिक सिंह भदोरिया")</p>
                  <a href="https://wa.me/918319183027" className="info-value">8319183027</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">स्थान</p>
                  <p className="info-value">उज्जैन, मध्य प्रदेश</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="https://wa.me/919826045481" className="cta-button">अभी बात करें</a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="form-card" onSubmit={handleWhatsAppSend}>
              <h3>त्वरित संदेश</h3>
              <p>हमें अपनी समस्या बताएं, हम जल्द ही आपसे संपर्क करेंगे।</p>
              <div className="form-inputs">
                <input
                  type="text"
                  name="name"
                  placeholder="आपका नाम"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="विषय"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
                <textarea
                  name="message"
                  placeholder="आपका संदेश..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input text-area"
                ></textarea>
                <button type="submit" className="cta-button submit-btn">व्हाट्सप्प पर संदेश भेजें</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .contact {
          padding: 8rem 0;
          background: radial-gradient(circle at bottom right, rgba(157, 59, 255, 0.1), transparent 50%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          padding: 4rem;
          gap: 4rem;
          overflow: hidden;
        }
        .contact-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .contact-desc {
          color: var(--text-muted);
          font-size: 1.2rem;
          margin-bottom: 3rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .info-icon {
          font-size: 1.5rem;
          background: rgba(157, 59, 255, 0.1);
          padding: 1rem;
          border-radius: 15px;
          line-height: 1;
        }
        .info-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }
        .info-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .info-value:hover {
          color: var(--primary);
        }
        .contact-form-container {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--glass-border);
        }
        .form-inputs {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .form-input {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          color: var(--text-main);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--primary);
        }
        .text-area {
          height: 150px;
          resize: none;
        }
        .submit-btn {
          width: 100%;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; padding: 3rem; gap: 3rem; }
        }
        @media (max-width: 768px) {
          .contact-title { font-size: 2.2rem; }
          .info-value { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
