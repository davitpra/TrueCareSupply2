"use client";

import { useEffect, useRef, useState, memo } from "react";
import styles from "./TrustBar.module.css";

function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [counts, setCounts] = useState({
    delivery: 0,
    availability: 0,
    certification: 0,
    experience: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      delivery: 72,
      availability: 24,
      certification: 100,
      experience: 15,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        delivery: Math.floor(targets.delivery * progress),
        availability: Math.floor(targets.availability * progress),
        certification: Math.floor(targets.certification * progress),
        experience: Math.floor(targets.experience * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = scrollContainer.offsetWidth;
      const currentSlide = Math.round(scrollLeft / itemWidth);
      setActiveSlide(currentSlide);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const trustItems = [
    {
      count: counts.delivery,
      suffix: " max",
      label: "Délai de livraison inférieur à 72 heures, sans garantie",
      ariaLabel: "Délai de livraison inférieur à 72 heures, sans garantie.",
    },
    {
      count: counts.availability,
      suffix: "/7",
      label: "Service disponible",
      ariaLabel: "Service disponible 24 heures sur 24, 7 jours sur 7",
    },
    {
      count: counts.certification,
      suffix: "%",
      label: "Produits certifiés",
      ariaLabel: "100 pourcent de produits certifiés",
    },
    {
      count: counts.experience,
      suffix: "+",
      label: "Années d'expertise",
      ariaLabel: "15 années d'expertise",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.trustBar} ${isVisible ? styles.fadeIn : ""}`}
      aria-label="Nos chiffres clés"
    >
      <div ref={scrollRef} className={styles.trustContent}>
        {trustItems.map((item, index) => (
          <article key={index} className={styles.trustItem}>
            <div className={styles.trustNumber} aria-label={item.ariaLabel}>
              {item.count}
              {item.suffix}
            </div>
            <div className={styles.trustLabel}>{item.label}</div>
          </article>
        ))}
      </div>

      <div className={styles.indicators}>
        {trustItems.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ""}`}
            onClick={() => {
              scrollRef.current?.scrollTo({
                left: index * scrollRef.current.offsetWidth,
                behavior: "smooth",
              });
            }}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(TrustBar);
