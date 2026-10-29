import { Zap, Shield, Smartphone, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';
import styles from './HeroSection.module.css';

const benefits = [
  { icon: Zap, label: 'Fast Performance' },
  { icon: Shield, label: 'Secure & Reliable' },
  { icon: Smartphone, label: 'Mobile Responsive' },
  { icon: TrendingUp, label: 'SEO Friendly' },
];

export default function HeroSection({ onQuote }) {
  const scrollToPortfolio = () => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  const scrollDown = () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>CUSTOM WEB &amp; SOFTWARE DEVELOPMENT</span>
          <h1 className={styles.heading}>
            Modern Solutions for<br />
            <span className={styles.highlight}>Your Business</span>
          </h1>
          <p className={styles.desc}>
            From responsive websites to powerful web applications, DevDukaan builds secure, scalable and SEO-friendly digital solutions tailored to your business goals.
          </p>
          <div className={styles.benefits}>
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.benefit}>
                <Icon size={16} /> {label}
              </div>
            ))}
          </div>
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={onQuote}>
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <button className={styles.ctaSecondary} onClick={scrollToPortfolio}>
              Explore Our Work
            </button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.annotation}>✨ Let's Build Something Great Together!</div>
          <div className={styles.mockupWrap}>
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.mockupBar}>
                  <span /><span /><span />
                  <div className={styles.mockupUrl}>devdukaan.in</div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.mockupNav} />
                  <div className={styles.mockupHero}>
                    <div className={styles.mockupLine} style={{ width: '70%' }} />
                    <div className={styles.mockupLine} style={{ width: '50%' }} />
                    <div className={styles.mockupBtn} />
                  </div>
                  <div className={styles.mockupCards}>
                    {[1,2,3].map(i => <div key={i} className={styles.mockupCard} />)}
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase} />
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNav} />
                <div className={styles.phoneLine} style={{ width: '80%' }} />
                <div className={styles.phoneLine} style={{ width: '60%' }} />
                <div className={styles.phoneBtn} />
              </div>
            </div>
            <div className={styles.floatCode}>{'{ }'}</div>
            <div className={styles.floatCloud}>☁</div>
            <div className={styles.floatReact}>⚛</div>
          </div>
        </div>
      </div>
      <button className={styles.scrollDown} onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
