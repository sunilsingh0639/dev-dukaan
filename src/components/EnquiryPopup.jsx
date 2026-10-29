import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import styles from './EnquiryPopup.module.css';

const STORAGE_KEY = 'dd_popup_shown';

export default function EnquiryPopup({ modalOpen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => {
      if (!modalOpen) {
        setVisible(true);
        localStorage.setItem(STORAGE_KEY, '1');
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setVisible(false); };
    if (visible) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && setVisible(false)}>
      <div className={styles.popup} role="dialog" aria-modal="true" aria-label="Project enquiry">
        <button className={styles.close} onClick={() => setVisible(false)} aria-label="Close popup"><X size={18} /></button>
        <div className={styles.header}>
          <span className={styles.emoji}>💡</span>
          <h2>Have a Project in Mind?</h2>
          <p>Let's turn your idea into a digital solution. Tell us what you need and our team will help you explore the right approach.</p>
        </div>
        <EnquiryForm onSuccess={() => setVisible(false)} />
      </div>
    </div>
  );
}
