import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lấy tên cuối làm logo
  const nameParts = PORTFOLIO_DATA.name.split(' ');
  const logoName = nameParts[nameParts.length - 1];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo text-gradient">{logoName}</a>
        <ul className="navbar-links">
          <li><a href="#about" className="navbar-link">Về tôi</a></li>
          <li><a href="#experience" className="navbar-link">Kinh nghiệm</a></li>
          <li><a href="#achievements" className="navbar-link">Thành tựu</a></li>
          <li><a href="#skills" className="navbar-link">Kỹ năng</a></li>
          <li><a href="#contact" className="navbar-link">Liên hệ</a></li>
        </ul>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
