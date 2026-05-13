import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">
          {data.experience.map((exp, index) => {
            const Icon = exp.icon;
            const isHighlight = exp.role.includes('TikTok Shop US');
            
            return (
              <motion.div 
                key={index} 
                className={`timeline-item ${isHighlight ? 'highlight' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-icon">
                  <Icon size={24} />
                </div>
                <div className="timeline-content">
                  <div className="card">
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <p className="exp-desc text-color-text-muted">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
