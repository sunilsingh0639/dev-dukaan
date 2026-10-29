import { portfolio } from '../data/portfolio';
import styles from './ClientsSection.module.css';

export default function ClientsSection() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>Our Clients</span>
          <h2>Brands We've Worked With</h2>
          <p>Projects delivered across travel, education, healthcare, e-commerce and sports.</p>
        </div>
        <div className={styles.grid}>
          {portfolio.map(p => (
            <div key={p.id} className={styles.card}>
              <div className={styles.logo}>{p.name.charAt(0)}</div>
              <div className={styles.info}>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.cat}>{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
