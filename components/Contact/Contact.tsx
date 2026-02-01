import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Contact</span>
        <h2>Parlons de vos besoins</h2>
        <p className={styles.sectionSubtitle}>
          Notre équipe d&apos;experts est prête à créer votre solution sur mesure
        </p>
      </div>

      <div className={styles.contactContainer}>
        <h3>Démarrez votre partenariat dès aujourd&apos;hui</h3>
        <a href="mailto:contact@truecaresupply.ca" className={styles.contactEmailBtn}>
          📧 contact@truecaresupply.ca
        </a>
        <p className={styles.contactInfo}>
          Soumission gratuite • Sans engagement • Réponse sous 2 heures
          <br />
          Notre équipe analyse vos besoins et vous propose une solution personnalisée
        </p>
      </div>
    </section>
  );
}
