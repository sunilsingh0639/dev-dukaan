import { useState } from 'react';
import { technologies } from '../data/siteData';
import styles from './TechnologiesSection.module.css';

export default function TechnologiesSection() {
  const categories = Object.keys(technologies);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="technologies" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>Tech Stack</span>
          <h2>Technologies We Work With</h2>
          <p>Modern, proven technologies to build reliable and scalable solutions.</p>
        </div>
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button key={cat} className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {technologies[active].map(tech => (
            <div key={tech.name} className={styles.card}>
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
