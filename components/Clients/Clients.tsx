'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Smile, HeartPulse, Home } from 'lucide-react';
import styles from './Clients.module.css';

const clients = [
  {
    icon: Building2,
    title: 'Cliniques privées',
    ariaLabel: 'Cliniques privées partenaires'
  },
  {
    icon: Smile,
    title: 'Cabinets dentaires',
    ariaLabel: 'Cabinets dentaires partenaires'
  },
  {
    icon: HeartPulse,
    title: 'Centres médicaux',
    ariaLabel: 'Centres médicaux partenaires'
  },
  {
    icon: Home,
    title: 'Soins à domicile',
    ariaLabel: 'Services de soins à domicile partenaires'
  }
];

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nos partenaires</span>
        <h2>Ils nous font confiance</h2>
        <p className={styles.sectionSubtitle}>
          Plus de 500 établissements de santé comptent sur notre expertise quotidiennement
        </p>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientsGrid} role="list">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <article
                key={index}
                className={`${styles.clientCard} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                role="listitem"
                tabIndex={0}
                aria-label={client.ariaLabel}
              >
                <div className={styles.clientIcon} aria-hidden="true">
                  <IconComponent size={56} strokeWidth={2} />
                </div>
                <h3>{client.title}</h3>
                <div className={styles.cardGlow}></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
