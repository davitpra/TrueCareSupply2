import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className={styles.trustContent}>
        <div className={styles.trustItem}>
          <div className={styles.trustNumber}>500+</div>
          <div className={styles.trustLabel}>Établissements partenaires</div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustNumber}>24/7</div>
          <div className={styles.trustLabel}>Service disponible</div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustNumber}>100%</div>
          <div className={styles.trustLabel}>Produits certifiés</div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustNumber}>15+</div>
          <div className={styles.trustLabel}>Années d&apos;expertise</div>
        </div>
      </div>
    </div>
  );
}
