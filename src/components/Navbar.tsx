import React, { useState, useEffect } from 'react';
import { usePortfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const data = usePortfolioData();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lấy tên cuối làm logo
  const nameParts = data.name.split(' ');
  const logoName = nameParts[nameParts.length - 1];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language && i18n.language.startsWith('vi') ? 'en' : 'vi');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo text-gradient">{logoName}</a>
        <ul className="navbar-links">
          <li><a href="#about" className="navbar-link">{t('nav.about')}</a></li>
          <li><a href="#experience" className="navbar-link">{t('nav.experience')}</a></li>
          <li><a href="#achievements" className="navbar-link">{t('nav.achievements')}</a></li>
          <li><a href="#skills" className="navbar-link">{t('nav.skills')}</a></li>
          <li><a href="#contact" className="navbar-link">{t('nav.contact')}</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleLanguage} 
            className="btn btn-outline" 
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
          >
            {i18n.language && i18n.language.startsWith('vi') ? 'EN' : 'VI'}
          </button>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
