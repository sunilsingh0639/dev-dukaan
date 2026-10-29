import {
  Shield, Smartphone, ArrowRight, ChevronDown, LayoutDashboard,
  Braces, Cloud, Code2, Database, Layers,
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './HeroSection.module.css';

const benefits = [
  { icon: LayoutDashboard, label: 'Responsive Websites' },
  { icon: Code2, label: 'Custom Web Applications' },
  { icon: Smartphone, label: 'Android & iOS Apps' },
  { icon: Shield, label: 'Secure & Scalable Solutions' },
];

export default function HeroSection({ onQuote }) {
  const scrollToPortfolio = () => scrollToSection('#portfolio');
  const scrollDown = () => scrollToSection('#services');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.inner}>
        <div className={styles.content} data-reveal>
          <span className={styles.eyebrow}>WEB &amp; MOBILE APP DEVELOPMENT</span>
          <h1 className={styles.heading}>
            Websites &amp; <span className={styles.highlight}>Mobile Apps</span> Built for Your Business
          </h1>
          <p className={styles.desc}>
            We design and develop modern websites, powerful web applications and Android &amp; iOS mobile apps that help businesses connect with customers, streamline operations and grow digitally.
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
        <div className={styles.visual} data-reveal aria-hidden="true">
          <div className={styles.annotation}>✨ Let's Build Something Great Together!</div>
          <div className={styles.mockupWrap}>
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.mockupBar}>
                  <span /><span /><span />
                  <div className={styles.mockupUrl}>devdukaan.in</div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.mockupNav}>
                    <span className={styles.mockupBrand}>studio<span>.</span></span>
                    <div className={styles.mockupNavLinks}><i /><i /><i /></div>
                    <span className={styles.mockupNavAction} />
                  </div>
                  <div className={styles.mockupHero}>
                    <div className={styles.mockupCopy}>
                      <span className={styles.mockupEyebrow}>DIGITAL COMMERCE</span>
                      <div className={styles.mockupLine} style={{ width: '88%' }} />
                      <div className={styles.mockupLine} style={{ width: '65%' }} />
                      <div className={styles.mockupSubline} />
                      <div className={styles.mockupBtn} />
                    </div>
                    <div className={styles.mockupArt}>
                      <div className={styles.artOrb} />
                      <div className={styles.artCard}><span /><b /><i /></div>
                    </div>
                  </div>
                  <div className={styles.dashboard}>
                    <div className={styles.dashboardHead}><b>Overview</b><span>Last 30 days⌄</span></div>
                    <div className={styles.dashboardCards}>
                      <div className={styles.metricCard}><span>Websites</span><b>Responsive</b><i>Across screen sizes</i></div>
                      <div className={styles.metricCard}><span>Mobile apps</span><b>Android &amp; iOS</b><i>Platform-aware design</i></div>
                      <div className={styles.chartCard}><Layers size={17} /><span>Web + mobile, built for your needs</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase} />
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNav}><span /><i /><i /></div>
                <span className={styles.phoneAppBadge}>MOBILE APP</span>
                <div className={styles.phoneImage}><b /><i /></div>
                <div className={styles.phoneLabel} />
                <div className={styles.phoneLine} style={{ width: '80%' }} />
                <div className={styles.phoneLine} style={{ width: '60%' }} />
                <div className={styles.phoneBtn} />
              </div>
            </div>
            <div className={styles.codeCard}><span><i /><i /><i /></span><code><b>const</b> site = <em>“your idea”</em></code><code>build(site)<strong>;</strong></code><div className={styles.codeProgress}><i /></div></div>
            <div className={`${styles.floatIcon} ${styles.floatCode}`}><Code2 size={20} /><span>&lt;/&gt;</span></div>
            <div className={`${styles.floatIcon} ${styles.floatCloud}`}><Cloud size={22} /><span>Cloud</span></div>
            <div className={`${styles.floatIcon} ${styles.floatReact}`}><Braces size={21} /><span>{'{}'}</span></div>
            <div className={`${styles.floatIcon} ${styles.floatDatabase}`}><Database size={20} /><span>API</span></div>
            <div className={`${styles.floatIcon} ${styles.floatLayers}`}><Layers size={19} /><span>UI</span></div>
          </div>
        </div>
      </div>
      <button className={styles.scrollDown} onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
