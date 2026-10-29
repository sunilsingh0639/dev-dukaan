import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <span className={styles.badge}>Client Feedback</span>
          <h2>What Our Clients Say</h2>
        </div>
        <div className={styles.placeholder}>
          <div className={styles.icon}>💬</div>
          <h3>Client Testimonials Coming Soon</h3>
          <p>We're collecting verified feedback from our clients. In the meantime, you can explore our portfolio to see the work we've delivered.</p>
          <div className={styles.commitments}>
            {['Clear communication throughout the project', 'Delivery aligned with agreed scope and timeline', 'Responsive support after launch', 'Transparent pricing with no hidden costs'].map(c => (
              <div key={c} className={styles.commitment}>✓ {c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
