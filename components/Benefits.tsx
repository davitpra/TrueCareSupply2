import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nos avantages</span>
        <h2>Pourquoi TrueCare Supply</h2>
        <p className={styles.sectionSubtitle}>
          L&apos;excellence opérationnelle qui transforme votre approvisionnement médical
        </p>
      </div>

      <div className={styles.benefitsGrid}>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>🛡️</div>
          <h3>Fiabilité absolue</h3>
          <p>
            Stock sécurisé multi-sources et chaîne d&apos;approvisionnement redondante. Garantie zéro
            rupture ou remboursement.
          </p>
        </div>

        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>⚡</div>
          <h3>Rapidité inégalée</h3>
          <p>
            Livraison express garantie en moins de 24h partout au Québec. Service d&apos;urgence &lt; 4h
            disponible.
          </p>
        </div>

        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>✓</div>
          <h3>Qualité premium</h3>
          <p>
            100% des produits certifiés Santé Canada. Conformité ISO et traçabilité complète
            garanties.
          </p>
        </div>

        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>💼</div>
          <h3>Service VIP</h3>
          <p>
            Gestionnaire dédié, commandes prioritaires et tarification optimisée selon vos volumes.
          </p>
        </div>
      </div>
    </section>
  );
}
