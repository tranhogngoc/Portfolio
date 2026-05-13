import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Liên Hệ</h2>
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>{PORTFOLIO_DATA.email}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Số điện thoại</h4>
                <p>{PORTFOLIO_DATA.phone}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Địa chỉ</h4>
                <p>{PORTFOLIO_DATA.location}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Bē</span>
              </div>
              <div className="contact-details">
                <h4>Behance</h4>
                <p><a href={`https://${PORTFOLIO_DATA.behance}`} target="_blank" rel="noreferrer">{PORTFOLIO_DATA.behance}</a></p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container card glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Tên của bạn</label>
                <input type="text" id="name" className="form-control" placeholder="Nhập tên của bạn" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Nhập email của bạn" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tin nhắn</label>
                <textarea id="message" className="form-control" placeholder="Nội dung tin nhắn..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <Send size={20} /> Gửi tin nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
