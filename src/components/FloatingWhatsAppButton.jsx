import { MessageCircle } from 'lucide-react';
import { contact } from '../data/siteData';
import styles from './FloatingWhatsAppButton.module.css';

export default function FloatingWhatsAppButton() {
  if (!contact.whatsapp) return null;
  const number = contact.whatsapp.replace(/\D/g, '');
  return (
    <a
      href={`https://wa.me/${number}?text=Hi%20DevDukaan%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
      target="_blank" rel="noopener noreferrer"
      className={styles.btn} aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
