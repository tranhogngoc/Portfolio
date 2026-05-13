import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Về Tôi</h2>
        <div className="about-grid">
          <motion.div 
            className="about-text card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Câu chuyện của mình</h3>
            <p>{PORTFOLIO_DATA.about}</p>
            <p>Từ năm 2021, mình bắt đầu sự nghiệp với vai trò Freelancer trong lĩnh vực thiết kế đồ họa và chỉnh sửa video, đặc biệt tập trung vào các nội dung về bóng đá. Quá trình làm việc đã giúp mình rèn giũa tư duy hình ảnh, kỹ năng nắm bắt xu hướng và thấu hiểu người xem.</p>
            <p>Với nền tảng đó, bước sang năm 2025, mình quyết định thử sức ở một vai trò mới đầy thách thức nhưng cũng cực kỳ tiềm năng: Seller trên nền tảng TikTok Shop US. Sự kết hợp giữa tư duy thiết kế và kỹ năng sale là thế mạnh để mình tạo ra những chiến dịch hiệu quả.</p>
          </motion.div>
          
          <motion.div 
            className="about-education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gradient">Học Vấn</h3>
            {PORTFOLIO_DATA.education.map((edu, index) => (
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
