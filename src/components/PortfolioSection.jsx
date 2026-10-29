import { ExternalLink } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import styles from './PortfolioSection.module.css';

const categoryColors = {
  Travel: '#10b981', 'Jewellery & E-commerce': '#f59e0b',
  Education: '#3b82f6', Healthcare: '#ef4444', Sports: '#8b5cf6',
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>Our Work</span>
          <h2>Projects We've Built</h2>
          <p>A selection of websites and applications we've developed for our clients.</p>
        </div>
        <div className={styles.grid}>
          {portfolio.map(p => (
            <div key={p.id} className={styles.card}>
              <div className={styles.thumb} style={{ background: `linear-gradient(135deg, ${categoryColors[p.category] || '#3b82f6'}22, ${categoryColors[p.category] || '#06b6d4'}11)` }}>
                <div className={styles.thumbInner}>
                  <span className={styles.thumbIcon}>{p.category === 'Travel' ? '✈️' : p.category === 'Jewellery & E-commerce' ? '💎' : p.category === 'Education' ? '📚' : p.category === 'Healthcare' ? '🏥' : '🏆'}</span>
                  <span className={styles.thumbName}>{p.name}</span>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.cat} style={{ color: categoryColors[p.category] || '#3b82f6', background: `${categoryColors[p.category] || '#3b82f6'}18` }}>
                  {p.category}
                </span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                    Visit Website <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className={styles.pending}>URL to be configured</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
