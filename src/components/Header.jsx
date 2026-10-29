import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/siteData';
import styles from './Header.module.css';

export default function Header({ onQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Logo />
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Main navigation">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <button className={`${styles.cta} ${styles.ctaMobile}`} onClick={() => { setOpen(false); onQuote(); }}>
            Get a Free Quote
          </button>
        </nav>
        <button className={styles.cta} onClick={onQuote}>Get a Free Quote</button>
        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </header>
  );
}
