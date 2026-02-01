'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>TrueCare Supply</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Avantages</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact" className={styles.navCta}>Contactez-nous</a></li>
        </ul>
      </div>
    </nav>
  );
}
