import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-container">
          {data.skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span>{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
