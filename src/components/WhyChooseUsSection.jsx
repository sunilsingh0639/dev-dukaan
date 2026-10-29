import * as Icons from 'lucide-react';
import { whyUs } from '../data/siteData';
import styles from './WhyChooseUsSection.module.css';

export default function WhyChooseUsSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>Why DevDukaan</span>
          <h2>Why Choose DevDukaan.in?</h2>
          <p>We focus on building the right solution for your business, not just delivering a website.</p>
        </div>
        <div className={styles.grid}>
          {whyUs.map(item => {
            const Icon = Icons[item.icon] || Icons.CheckCircle;
            return (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={22} color="#3b82f6" /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
