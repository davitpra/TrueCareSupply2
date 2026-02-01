'use client';

import { useEffect, useRef } from 'react';
import { Building2, Zap, Target, Gem, Check } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.visible);
          }, index * 150);
        }
      });
    }, observerOptions);

    const cards = cardsRef.current?.querySelectorAll(`.${styles.serviceCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Catalogue médical exhaustif',
      description: 'Accès immédiat à l\'ensemble des consommables médicaux essentiels avec stock permanent garanti.',
      features: [
        'Gants médicaux toutes catégories',
        'Masques chirurgicaux & N95',
        'Blouses stériles certifiées',
        'Seringues et matériel d\'injection',
        'Consommables spécialisés'
      ],
      ariaLabel: 'Catalogue médical exhaustif',
      highlight: '5000+ produits'
    },
    {
      icon: Zap,
      title: 'Livraison express 24/7',
      description: 'Service de transport prioritaire ultra-rapide partout au Québec, même les urgences.',
      features: [
        'Livraison d\'urgence < 4 heures',
        'Service standard 24 heures',
        'Tracking en temps réel',
        'Équipe logistique dédiée',
        'Disponible 365 jours/an'
      ],
      ariaLabel: 'Livraison express 24 heures sur 24, 7 jours sur 7',
      highlight: '< 4h'
    },
    {
      icon: Target,
      title: 'Gestion intelligente des pénuries',
      description: 'Système proactif d\'anticipation et solutions alternatives pour garantir votre continuité.',
      features: [
        'Surveillance marché en temps réel',
        'Alertes préventives automatiques',
        'Solutions de substitution certifiées',
        'Stock de sécurité personnalisé',
        'Planification stratégique'
      ],
      ariaLabel: 'Gestion intelligente des pénuries de stock',
      highlight: '99.9% disponibilité'
    },
    {
      icon: Gem,
      title: 'Service concierge dédié',
      description: 'Accompagnement personnalisé par une équipe d\'experts dédiés à votre réussite.',
      features: [
        'Gestionnaire de compte attitré',
        'Commandes prioritaires VIP',
        'Conseil d\'optimisation stock',
        'Support technique 24/7',
        'Tarification sur mesure'
      ],
      ariaLabel: 'Service concierge dédié personnalisé',
      highlight: '24/7'
    }
  ];

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nos solutions</span>
        <h2 id="services-heading">Services premium tout-en-un</h2>
        <p className={styles.sectionSubtitle}>
          Des solutions complètes et intégrées pour chaque aspect de votre approvisionnement médical
        </p>
      </div>

      <div className={styles.servicesContainer} ref={cardsRef}>
        <div className={styles.servicesGrid} role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                className={styles.serviceCard}
                role="listitem"
                tabIndex={0}
                aria-label={service.ariaLabel}
              >
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon} aria-hidden="true">
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <h3>{service.title}</h3>
                  <div className={styles.serviceHighlight} aria-label={`Métrique: ${service.highlight}`}>
                    {service.highlight}
                  </div>
                </div>
                <p>{service.description}</p>
                <ul className={styles.serviceFeatures} role="list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <Check
                        className={styles.checkIcon}
                        size={20}
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
