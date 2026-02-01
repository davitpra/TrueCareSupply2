import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Prêt à garantir votre excellence opérationnelle ?</h2>
        <p>
          Rejoignez l&apos;élite des établissements de santé qui ont choisi la tranquillité
          d&apos;esprit absolue avec TrueCare Supply
        </p>

        <div className={styles.ctaButtons}>
          <a href="#contact" className={styles.ctaBtnPrimary}>
            Obtenir une soumission gratuite
            <span>→</span>
          </a>
          <a href="mailto:contact@truecaresupply.ca" className={styles.ctaBtnSecondary}>
            Parler à un expert
          </a>
        </div>
      </div>
    </section>
  );
}
