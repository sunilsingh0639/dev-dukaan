import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import styles from './EnquiryModal.module.css';

export default function EnquiryModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      overlayRef.current?.querySelector('button')?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Enquiry Form">
        <div className={styles.header}>
          <div>
            <h2>Get a Free Quote</h2>
            <p>Tell us about your project and we'll get back to you within one business day.</p>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close"><X size={20} /></button>
        </div>
        <div className={styles.body}>
          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
