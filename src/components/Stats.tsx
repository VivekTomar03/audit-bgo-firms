import React from 'react';
import { Users2, CheckCircle, CalendarDays, Globe } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: "संतुष्ट ग्राहक", value: "5000+", icon: <Users2 size={24} /> },
    { label: "सफल परियोजनाएं", value: "1000+", icon: <CheckCircle size={24} /> },
    { label: "वर्षों का अनुभव", value: "25+", icon: <CalendarDays size={24} /> },
    { label: "सेवा क्षेत्र", value: "All Division", icon: <Globe size={24} /> }
  ];

  return (
    <section className="stats reveal">
      <div className="container">
        <div className="stats-grid glass-morphism">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-bg">
                {stat.icon}
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {index < stats.length - 1 && <div className="stat-divider"></div>}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats {
          padding: 4rem 0;
          margin-top: -6rem;
          position: relative;
          z-index: 10;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 3rem 2rem;
          align-items: center;
        }
        .stat-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          position: relative;
        }
        .stat-icon-bg {
          background: rgba(157, 59, 255, 0.1);
          color: var(--primary);
          padding: 1rem;
          border-radius: 15px;
        }
        .stat-info {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 0.5rem;
        }
        .stat-divider {
          position: absolute;
          right: 0;
          height: 60%;
          width: 1px;
          background: var(--glass-border);
        }
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 3rem; }
          .stat-divider { display: none; }
          .stats { margin-top: 2rem; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; padding: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
