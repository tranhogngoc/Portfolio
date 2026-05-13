import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const About = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-grid">
          <motion.div 
            className="about-text card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{t('about.story')}</h3>
            <p>{data.about}</p>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </motion.div>
          
          <motion.div 
            className="about-education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gradient">{t('about.education')}</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-period">{edu.period}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-degree">{edu.degree}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
