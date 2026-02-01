import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nos solutions</span>
        <h2>Services premium tout-en-un</h2>
        <p className={styles.sectionSubtitle}>
          Des solutions complètes et intégrées pour chaque aspect de votre approvisionnement médical
        </p>
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>🏥</div>
              <h3>Catalogue médical exhaustif</h3>
            </div>
            <p>
              Accès immédiat à l&apos;ensemble des consommables médicaux essentiels avec stock permanent
              garanti.
            </p>
            <ul className={styles.serviceFeatures}>
              <li>Gants médicaux toutes catégories</li>
              <li>Masques chirurgicaux &amp; N95</li>
              <li>Blouses stériles certifiées</li>
              <li>Seringues et matériel d&apos;injection</li>
              <li>Consommables spécialisés</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Livraison express 24/7</h3>
            </div>
            <p>
              Service de transport prioritaire ultra-rapide partout au Québec, même les urgences.
            </p>
            <ul className={styles.serviceFeatures}>
              <li>Livraison d&apos;urgence &lt; 4 heures</li>
              <li>Service standard 24 heures</li>
              <li>Tracking en temps réel</li>
              <li>Équipe logistique dédiée</li>
              <li>Disponible 365 jours/an</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>🎯</div>
              <h3>Gestion intelligente des pénuries</h3>
            </div>
            <p>
              Système proactif d&apos;anticipation et solutions alternatives pour garantir votre
              continuité.
            </p>
            <ul className={styles.serviceFeatures}>
              <li>Surveillance marché en temps réel</li>
              <li>Alertes préventives automatiques</li>
              <li>Solutions de substitution certifiées</li>
              <li>Stock de sécurité personnalisé</li>
              <li>Planification stratégique</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>💎</div>
              <h3>Service concierge dédié</h3>
            </div>
            <p>
              Accompagnement personnalisé par une équipe d&apos;experts dédiés à votre réussite.
            </p>
            <ul className={styles.serviceFeatures}>
              <li>Gestionnaire de compte attitré</li>
              <li>Commandes prioritaires VIP</li>
              <li>Conseil d&apos;optimisation stock</li>
              <li>Support technique 24/7</li>
              <li>Tarification sur mesure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
