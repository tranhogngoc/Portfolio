import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
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
          <h1 className="text-gradient">Xin chào, mình là<br />{PORTFOLIO_DATA.name}</h1>
          <h2 className="hero-subtitle text-gradient-tiktok">
            {PORTFOLIO_DATA.role.split(' | ')[0]}
          </h2>
          <p className="hero-desc">{PORTFOLIO_DATA.about}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Mail size={20} /> Liên hệ ngay
            </a>
            <a href="#" className="btn btn-outline">
              <Download size={20} /> Tải CV
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
            <div className="hero-image-placeholder">
              <span>Ảnh Chân Dung</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
