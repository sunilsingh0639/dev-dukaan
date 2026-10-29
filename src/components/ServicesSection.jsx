import * as Icons from 'lucide-react';
import { services } from '../data/services';
import styles from './ServicesSection.module.css';

export default function ServicesSection({ onQuote }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>What We Do</span>
          <h2>Our Services</h2>
          <p>Everything you need to build, grow and scale your online presence.</p>
        </div>
        <div className={styles.grid}>
          {services.map(s => {
            const Icon = Icons[s.icon] || Icons.Globe;
            return (
              <div key={s.id} className={styles.card}>
                <div className={styles.iconWrap} style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                  <Icon size={24} color={s.color} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <button className={styles.action} onClick={onQuote}>Request a Quote →</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
