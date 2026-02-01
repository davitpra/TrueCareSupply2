import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} role="banner">
      <div className={styles.heroGrid} aria-hidden="true"></div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>
            L&apos;excellence <span className={styles.highlight}>médicale</span> commence ici
          </h1>
          <p className={styles.heroSubtitle}>
            Le partenaire stratégique n°1 pour l&apos;approvisionnement médical au Québec.
            Zéro rupture, livraison garantie, excellence absolue.
          </p>

          <div className={styles.heroButtons} role="group" aria-label="Actions principales">
            <a href="#contact" className={styles.btnPrimary} aria-label="Obtenir une soumission gratuite">
              Obtenir une soumission
              <svg className={styles.btnArrow} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className={styles.btnSecondary} aria-label="Explorer nos services médicaux">
              Explorer nos services
            </a>
          </div>

          <div className={styles.heroFeatures} role="list" aria-label="Avantages clés">
            <div className={styles.heroFeature} role="listitem">
              <div className={styles.heroFeatureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.heroFeatureText}>Livraison 24h</div>
            </div>
            <div className={styles.heroFeature} role="listitem">
              <div className={styles.heroFeatureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.heroFeatureText}>Stock garanti</div>
            </div>
            <div className={styles.heroFeature} role="listitem">
              <div className={styles.heroFeatureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.heroFeatureText}>Qualité certifiée</div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Statistiques de performance">
          <div className={styles.heroCards}>
            <div className={styles.floatingCard}>
              <div className={styles.cardStat} aria-label="Taux de disponibilité de 99.9 pourcent">99.9%</div>
              <div className={styles.cardLabel}>Taux de disponibilité</div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardStat} aria-label="Livraison en 24 heures">24h</div>
              <div className={styles.cardLabel}>Livraison express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
