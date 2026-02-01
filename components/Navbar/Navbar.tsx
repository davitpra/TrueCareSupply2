"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// Throttle helper para optimizar el scroll listener
function throttle(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: any[]) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, wait);
    }
  };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Animación de entrada
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Scroll listener con throttle
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver para detectar sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Cerrar menú móvil al hacer click en un link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Avantages" },
    { href: "#clients", label: "Clients" },
  ];

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${isVisible ? styles.visible : ""}`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className={styles.navContent}>
        <a
          href="/"
          className={styles.logo}
          aria-label="TrueCare Supply - Retour à l'accueil"
        >
          TrueCare Supply
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.substring(1) ? styles.active : ""
                }
                aria-current={
                  activeSection === link.href.substring(1) ? "page" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.navCta}>
              Contactez-nous
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={styles.mobileNavItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={
                  activeSection === link.href.substring(1) ? styles.active : ""
                }
                aria-current={
                  activeSection === link.href.substring(1) ? "page" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={styles.mobileNavItem}
            style={{ animationDelay: `${navLinks.length * 0.1}s` }}
          >
            <a
              href="#contact"
              className={styles.navCta}
              onClick={handleLinkClick}
            >
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
