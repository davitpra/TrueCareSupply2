import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3>TrueCare Supply</h3>
          <p>
            Le leader québécois en fournitures médicales. Excellence, fiabilité et innovation au
            service de votre pratique médicale.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#services">Fournitures médicales</a></li>
            <li><a href="#services">Livraison express</a></li>
            <li><a href="#services">Gestion pénuries</a></li>
            <li><a href="#services">Service concierge</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Entreprise</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#about">À propos</a></li>
            <li><a href="#why-us">Pourquoi nous</a></li>
            <li><a href="#clients">Nos clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <ul className={styles.footerLinks}>
            <li><a href="mailto:contact@truecaresupply.ca">contact@truecaresupply.ca</a></li>
            <li>Service 24/7</li>
            <li>Partout au Québec</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 TrueCare Supply. Tous droits réservés. | Leader en fournitures médicales au Québec</p>
      </div>
    </footer>
  );
}
