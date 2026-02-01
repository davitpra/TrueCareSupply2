import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Qui nous sommes</span>
        <h2>Le standard d&apos;excellence en fournitures médicales</h2>
        <p className={styles.sectionSubtitle}>
          Une expertise québécoise inégalée au service de votre mission de soins
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          <p>
            <strong>TrueCare Supply n&apos;est pas un simple fournisseur.</strong> Nous sommes votre
            partenaire stratégique pour garantir la continuité absolue de vos opérations médicales,
            en toutes circonstances.
          </p>

          <p>
            Notre expertise reconnue en gestion proactive des pénuries et notre réseau
            d&apos;approvisionnement ultra-sécurisé nous permettent d&apos;assurer une disponibilité constante
            des consommables essentiels, même dans les situations les plus critiques.
          </p>

          <p>
            Parce que vos patients comptent sur vous chaque jour, nous avons bâti un système
            d&apos;approvisionnement redondant, des partenariats mondiaux stratégiques et une logistique
            d&apos;exception pour que <strong>vous ne manquiez jamais de rien</strong>.
          </p>
        </div>

        <div className={styles.aboutHighlight}>
          <div className={styles.aboutHighlightContent}>
            <h3>Notre promesse inébranlable</h3>
            <p>
              Zéro rupture de stock. Livraison garantie sous 24h. Qualité pharmaceutique
              irréprochable. C&apos;est notre engagement quotidien envers vous.
            </p>

            <div className={styles.aboutMetrics}>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>99.9%</div>
                <div className={styles.metricLabel}>Disponibilité produits</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>&lt; 24h</div>
                <div className={styles.metricLabel}>Délai livraison moyen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
