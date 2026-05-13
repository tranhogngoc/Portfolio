import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
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
                <p>{data.email}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>{t('contact.phone')}</h4>
                <p>{data.phone}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>{t('contact.location')}</h4>
                <p>{data.location}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Bē</span>
              </div>
              <div className="contact-details">
                <h4>Behance</h4>
                <p><a href={`https://${data.behance}`} target="_blank" rel="noreferrer">{data.behance}</a></p>
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
                <label htmlFor="name">{t('contact.name')}</label>
                <input type="text" id="name" className="form-control" placeholder={t('contact.name')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input type="email" id="email" className="form-control" placeholder={t('contact.email')} />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" className="form-control" placeholder={t('contact.message')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <Send size={20} /> {t('contact.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
