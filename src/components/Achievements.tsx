import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { usePortfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Play, 
  Pause, 
  Sparkles 
} from 'lucide-react';

const Counter = ({ value, prefix, suffix }: { value: string; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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

const ARCHI_IMAGES = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}archi/1.jpg`,
    tag: 'TikTok Shop US GMV'
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}archi/2.jpg`,
    tag: 'Store Operations'
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}archi/3.jpg`,
    tag: 'Analytics & Scaling'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    }
  })
};

const Achievements = () => {
  const data = usePortfolioData();
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalSlides = ARCHI_IMAGES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered || lightboxIndex !== null) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, lightboxIndex, nextSlide]);

  // Keyboard navigation for lightbox & slideshow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          setLightboxIndex(null);
        } else if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSlides : 0));
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, totalSlides]);

  const currentSlideTitle = t(`achievements.slides.${currentIndex}.title`);
  const currentSlideDesc = t(`achievements.slides.${currentIndex}.desc`);

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">{t('achievements.title')}</h2>

        {/* Counter cards grid */}
        <div className="achievements-grid">
          {data.achievements.map((item, index) => {
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

        {/* Showcase Slideshow Section */}
        <motion.div 
          className="achievement-showcase-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="showcase-header text-center">
            <div className="showcase-badge">
              <Sparkles size={16} />
              <span>{t('achievements.showcaseTitle')}</span>
            </div>
            <p className="showcase-subtitle">{t('achievements.showcaseSubtitle')}</p>
          </div>

          <div 
            className="slideshow-wrapper glass card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top Bar with Status & Auto-play toggle */}
            <div className="slideshow-topbar">
              <div className="slideshow-counter">
                <span className="counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="counter-divider">/</span>
                <span className="counter-total">{String(totalSlides).padStart(2, '0')}</span>
              </div>
              <div className="slideshow-tag">
                {ARCHI_IMAGES[currentIndex].tag}
              </div>
              <div className="slideshow-actions">
                <button 
                  className="slideshow-action-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? t('achievements.pause') : t('achievements.play')}
                  aria-label="Toggle autoplay"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button 
                  className="slideshow-action-btn"
                  onClick={() => setLightboxIndex(currentIndex)}
                  title={t('achievements.clickToEnlarge')}
                  aria-label="Enlarge image"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>

            {/* Slides Container */}
            <div className="slideshow-main">
              <div className="slideshow-viewport">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="slide-item"
                    onClick={() => setLightboxIndex(currentIndex)}
                  >
                    <div className="slide-image-wrapper">
                      <img 
                        src={ARCHI_IMAGES[currentIndex].src} 
                        alt={currentSlideTitle}
                        className="slide-image"
                        loading="lazy"
                      />
                      <div className="slide-image-overlay">
                        <div className="slide-zoom-hint">
                          <Maximize2 size={20} />
                          <span>{t('achievements.clickToEnlarge')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button 
                className="slideshow-nav-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label={t('achievements.prev')}
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                className="slideshow-nav-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label={t('achievements.next')}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Info & Progress */}
            <div className="slideshow-footer">
              <div className="slide-caption">
                <h3 className="slide-title">{currentSlideTitle}</h3>
                <p className="slide-desc">{currentSlideDesc}</p>
              </div>

              {/* Thumbnails & Dots */}
              <div className="slideshow-controls">
                <div className="slideshow-dots">
                  {ARCHI_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="slideshow-thumbnails">
                  {ARCHI_IMAGES.map((img, idx) => (
                    <div 
                      key={img.id}
                      className={`thumbnail-item ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(idx)}
                    >
                      <img src={img.src} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Autoplay Progress Line */}
            {isPlaying && !isHovered && (
              <div className="slideshow-progress-bar">
                <motion.div 
                  key={currentIndex}
                  className="slideshow-progress-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4.5, ease: 'linear' }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label={t('achievements.close')}
            >
              <X size={28} />
            </button>

            <button 
              className="lightbox-nav-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0));
              }}
              aria-label={t('achievements.prev')}
            >
              <ChevronLeft size={36} />
            </button>

            <button 
              className="lightbox-nav-btn next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSlides : 0));
              }}
              aria-label={t('achievements.next')}
            >
              <ChevronRight size={36} />
            </button>

            <div 
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={lightboxIndex}
                src={ARCHI_IMAGES[lightboxIndex].src} 
                alt={t(`achievements.slides.${lightboxIndex}.title`)}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              <div className="lightbox-caption">
                <h4>{t(`achievements.slides.${lightboxIndex}.title`)}</h4>
                <p>{t(`achievements.slides.${lightboxIndex}.desc`)}</p>
                <div className="lightbox-counter">
                  {lightboxIndex + 1} / {totalSlides}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
