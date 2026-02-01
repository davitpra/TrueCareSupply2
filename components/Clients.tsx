import styles from './Clients.module.css';

export default function Clients() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nos partenaires</span>
        <h2>Ils nous font confiance</h2>
        <p className={styles.sectionSubtitle}>
          Plus de 500 établissements de santé comptent sur notre expertise quotidiennement
        </p>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientsGrid}>
          <div className={styles.clientCard}>
            <div className={styles.clientIcon}>🏥</div>
            <h3>Cliniques privées</h3>
          </div>
          <div className={styles.clientCard}>
            <div className={styles.clientIcon}>🦷</div>
            <h3>Cabinets dentaires</h3>
          </div>
          <div className={styles.clientCard}>
            <div className={styles.clientIcon}>⚕️</div>
            <h3>Centres médicaux</h3>
          </div>
          <div className={styles.clientCard}>
            <div className={styles.clientIcon}>🏠</div>
            <h3>Soins à domicile</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
