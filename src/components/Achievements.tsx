import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Counter = ({ value, prefix, suffix }: { value: string; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numValue = parseInt(value.replace(/,/g, ''), 10);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numValue;
      const duration = 2000;
      const incrementTime = (duration / end) * 10;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Thành Tựu</h2>
        <div className="achievements-grid">
          {PORTFOLIO_DATA.achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                className="achievement-card card glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="achievement-icon">
                  <Icon size={32} />
                </div>
                <div className="achievement-value text-gradient-tiktok">
                  <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <div className="achievement-title">{item.title}</div>
                <div className="achievement-desc">{item.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
