import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our services and how we work.</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className={styles.chevron} />
              </button>
              {open === i && <div className={styles.answer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
