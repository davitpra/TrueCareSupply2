import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-heading">
      <div className={styles.ctaContent}>
        <h2 id="cta-heading">
          Prêt à garantir votre excellence opérationnelle ?
        </h2>
        <p className={styles.ctaDescription}>
          Rejoignez l&apos;élite des établissements de santé qui ont choisi la
          tranquillité d&apos;esprit absolue avec TrueCareSupply
        </p>

        <div className={styles.ctaButtons}>
          <a
            href="#contact"
            className={styles.ctaBtnPrimary}
            aria-label="Obtenir une soumission gratuite - Contactez-nous"
          >
            Obtenir une soumission gratuite
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
          <a
            href="mailto:contact@truecaresupply.ca"
            className={styles.ctaBtnSecondary}
            aria-label="Parler à un expert par email"
          >
            Parler à un expert
          </a>
        </div>
      </div>

      <div className={styles.decorativeElements} aria-hidden="true">
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </section>
  );
}
