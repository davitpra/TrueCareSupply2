"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      role="region"
      aria-labelledby="about-heading"
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>
          <span className={styles.iconFlag}>🍁</span> Qui nous sommes
        </span>
        <h2 id="about-heading">
          Le standard d&apos;excellence en fournitures médicales
        </h2>
        <p className={styles.sectionSubtitle}>
          Une expertise québécoise inégalée au service de votre mission de soins
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          <div className={styles.textBlock}>
            <p>
              <strong>
                TrueCareSupply n&apos;est pas un simple fournisseur.
              </strong>{" "}
              Nous sommes votre partenaire stratégique pour garantir la
              continuité absolue de vos opérations médicales, en toutes
              circonstances.
            </p>
          </div>

          <div className={styles.textBlock}>
            <p>
              Notre expertise reconnue en gestion proactive des pénuries et
              notre réseau d&apos;approvisionnement ultra-sécurisé nous
              permettent d&apos;assurer une disponibilité constante des
              consommables essentiels, même dans les situations les plus
              critiques.
            </p>
          </div>

          <div className={styles.textBlock}>
            <p>
              Parce que vos patients comptent sur vous chaque jour, nous avons
              bâti un système d&apos;approvisionnement redondant, des
              partenariats mondiaux stratégiques et une logistique
              d&apos;exception pour que{" "}
              <strong>vous ne manquiez jamais de rien</strong>.
            </p>
          </div>

          <div className={styles.badges}>
            <span className={styles.badge}>✓ Certifié qualité</span>
            <span className={styles.badge}>✓ Entreprise québécoise</span>
          </div>
        </div>

        <div className={styles.aboutHighlight}>
          <div className={styles.decorativePattern}></div>
          <div className={styles.aboutHighlightContent}>
            <h3>Notre promesse inébranlable</h3>
            <p>
              Zéro rupture de stock. Livraison garantie sous 24h. Qualité
              pharmaceutique irréprochable. C&apos;est notre engagement
              quotidien envers vous.
            </p>

            <div className={styles.aboutMetrics}>
              <div
                className={styles.metricItem}
                aria-label="Taux de disponibilité des produits"
              >
                <div className={styles.metricValue} data-value="99.9">
                  99.9%
                </div>
                <div className={styles.metricLabel}>Disponibilité produits</div>
              </div>
              <div
                className={styles.metricItem}
                aria-label="Délai moyen de livraison"
              >
                <div className={styles.metricValue}>&lt; 24h</div>
                <div className={styles.metricLabel}>Délai livraison moyen</div>
              </div>
            </div>

            <a href="#contact" className={styles.ctaButton}>
              Découvrir nos services
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
