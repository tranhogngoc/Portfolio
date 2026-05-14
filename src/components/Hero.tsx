import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { Download, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-gradient">{t('hero.greeting')}<br />{data.name}</h1>
          <h2 className="hero-subtitle text-gradient-tiktok">
            {data.role.split(' | ')[0]}
          </h2>
          <p className="hero-desc">{data.about}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Mail size={20} /> {t('hero.contact')}
            </a>
            <a href={`${import.meta.env.BASE_URL}Tran_Hong_Ngoc_CV.pdf`} download="Tran_Hong_Ngoc_CV.pdf" className="btn btn-outline">
              <Download size={20} /> {t('hero.download')}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}avatar_1.png`} alt="Avatar" className="hero-image-content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
