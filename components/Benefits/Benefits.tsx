"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Zap, CheckCircle2, Briefcase, Network } from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: Network,
    title: "Réseau étendu de fournisseurs",
    description:
      "Accès privilégié à un vaste réseau de fournisseurs médicaux certifiés pour répondre à tous vos besoins.",
  },
  {
    icon: Shield,
    title: "Fiabilité absolue",
    description:
      "Stock sécurisé multi-sources et chaîne d'approvisionnement redondante. Garantie zéro rupture ou remboursement.",
  },
  {
    icon: Zap,
    title: "Rapidité inégalée",
    description:
      "Livraison express garantie en moins de 24h partout au Québec. Service d'urgence < 4h disponible.",
  },
  {
    icon: CheckCircle2,
    title: "Qualité premium",
    description:
      "100% des produits certifiés Santé Canada. Conformité ISO et traçabilité complète garanties.",
  },
  {
    icon: Briefcase,
    title: "Service VIP",
    description:
      "Gestionnaire dédié, commandes prioritaires et tarification optimisée selon vos volumes.",
  },
];

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className={styles.section} ref={sectionRef}>
      <div
        className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ""}`}
      >
        <span className={styles.sectionLabel}>Nos avantages</span>
        <h2>Pourquoi TrueCareSupply</h2>
        <p className={styles.sectionSubtitle}>
          L&apos;excellence opérationnelle qui transforme votre
          approvisionnement médical
        </p>
      </div>

      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`${styles.benefitCard} ${isVisible ? styles.fadeInUp : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.benefitIcon}>
                <Icon
                  size={56}
                  strokeWidth={2}
                  className={`${styles.iconSvg} ${hoveredIndex === index ? styles.iconHovered : ""}`}
                />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
