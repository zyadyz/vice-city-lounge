"use client";

import { useEffect, useRef } from "react";

export default function OrderCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".cta-reveal"),
          { opacity: 1, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
            },
          }
        );
      }
    );
  }, []);

  return (
    <section
      id="order"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "8rem 1.5rem",
        textAlign: "center",
        background: "var(--bg-2)",
      }}
    >
      {/* Animated neon gradient bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(223,135,174,0.12) 0%, rgba(0,229,255,0.06) 50%, transparent 100%)",
          pointerEvents: "none",
          animation: "ctaGlow 4s ease-in-out infinite alternate",
        }}
      />

      {/* Top & bottom neon lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)",
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-2), var(--accent), transparent)",
          opacity: 0.4,
        }}
      />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <span className="section-label cta-reveal" style={{ opacity: 1 }}>
          Prêt à commander ?
        </span>

        <h2
          className="font-pricedown cta-reveal"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1,
            color: "#ffffff",
            textShadow: "none",
            marginBottom: "1.25rem",
            marginTop: "0.75rem",
            opacity: 1,
          }}
        >
          Commandez<br />
          <span style={{ color: "#ffffff" }}>
            Maintenant
          </span>
        </h2>

        <p
          className="cta-reveal"
          style={{
            color: "var(--text-dim)",
            fontSize: "1.1rem",
            letterSpacing: "2px",
            marginBottom: "2.5rem",
            opacity: 1,
          }}
        >
          Sur place · À emporter · Livraison · Ouvert jusqu&apos;à 5h
        </p>

        <div
          className="cta-reveal"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 1,
          }}
        >
          <a
            href="tel:+32471730578"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              background: "#DF87AE",
              color: "#07071A",
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "1px",
              textDecoration: "none",
              border: "none",
              boxShadow: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            📞 Appeler
          </a>

          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              background: "#5DD1E3",
              color: "#07071A",
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "1px",
              textDecoration: "none",
              border: "none",
              boxShadow: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            📍 Nous trouver
          </a>
        </div>

        {/* Hours reminder */}
        <div
          className="cta-reveal"
          style={{
            marginTop: "2.5rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            border: "1px solid var(--line)",
            opacity: 1,
          }}
        >
          <span style={{ color: "#00E5FF", fontSize: "0.85rem" }}>⏰</span>
          <span
            style={{
              color: "var(--text-dim)",
              fontSize: "0.85rem",
              letterSpacing: "1px",
            }}
          >
            Tous les jours · 17h00 – 05h00
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ctaGlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
