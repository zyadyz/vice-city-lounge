"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Dynamic import of gsap
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (gridRef.current) {
        tl.fromTo(
          gridRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );
      }
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 1, y: 40, filter: "blur(20px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
          "-=0.8"
        );
      }
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 1, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 1, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );
      }
    });
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOrder = () => {
    const el = document.getElementById("order");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Hero background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(7,7,26,0.25) 0%, rgba(7,7,26,0.35) 60%, rgba(7,7,26,0.75) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          paddingTop: "11rem",
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Titre combiné Bienvenue Chez + Vice City Lounge */}
        <img
          src="/hero-title.png"
          alt="Bienvenue chez Vice City Lounge"
          style={{
            width: "min(100vw, 900px)",
            maxWidth: "none",
            pointerEvents: "none",
            marginBottom: "0.5rem",
            mixBlendMode: "multiply",
            display: "block",
            margin: "0 auto 0.5rem auto",
            transform: "translateX(-3%)",
          }}
        />

        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--text-dim)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "1rem",
            opacity: 1,
          }}
        >
          Fast food · Charleroi · Ouvert jusqu&apos;à 5h du matin
        </p>

        {/* Stars rating */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            opacity: 1,
          }}
          ref={(el) => {
            if (el) el.style.opacity = "1";
          }}
        >
          <span style={{ color: "#FFB800", fontSize: "1.2rem", filter: "drop-shadow(0 0 6px #FFB800)" }}>
            ★★★★★
          </span>
          <span
            style={{
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "var(--text)",
            }}
          >
            4.8
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>· 82 avis</span>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 1,
          }}
        >
          <button
            onClick={scrollToOrder}
            style={{
              background: "#DF87AE",
              color: "#07071A",
              border: "none",
              borderRadius: "9999px",
              padding: "0.9rem 2rem",
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "1px",
              cursor: "pointer",
              boxShadow: "none",
              position: "relative",
              zIndex: 20,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Commander maintenant
          </button>

          <button
            onClick={scrollToMenu}
            style={{
              background: "#5DD1E3",
              color: "#07071A",
              border: "none",
              borderRadius: "9999px",
              padding: "0.9rem 2rem",
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "1px",
              cursor: "pointer",
              boxShadow: "none",
              position: "relative",
              zIndex: 20,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Voir le menu
          </button>
        </div>
      </div>

    </section>
  );
}
