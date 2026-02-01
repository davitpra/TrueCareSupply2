import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>
            L&apos;excellence <span className={styles.highlight}>médicale</span> commence ici
          </h1>
          <p className={styles.heroSubtitle}>
            Le partenaire stratégique n°1 pour l&apos;approvisionnement médical au Québec.
            Zéro rupture, livraison garantie, excellence absolue.
          </p>

          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>
              Obtenir une soumission
              <span>→</span>
            </a>
            <a href="#services" className={styles.btnSecondary}>
              Explorer nos services
            </a>
          </div>

          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <div className={styles.heroFeatureIcon}>⚡</div>
              <div className={styles.heroFeatureText}>Livraison 24h</div>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.heroFeatureIcon}>✓</div>
              <div className={styles.heroFeatureText}>Stock garanti</div>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.heroFeatureIcon}>🏆</div>
              <div className={styles.heroFeatureText}>Qualité certifiée</div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCards}>
            <div className={styles.floatingCard}>
              <div className={styles.cardStat}>99.9%</div>
              <div className={styles.cardLabel}>Taux de disponibilité</div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardStat}>24h</div>
              <div className={styles.cardLabel}>Livraison express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
