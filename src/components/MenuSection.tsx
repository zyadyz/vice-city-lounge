"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    icon: "🥖",
    name: "Sandwiches",
    description: "Bien garnis, bien assaisonnés. Du classique au signature.",
  },
  {
    icon: "🥗",
    name: "Bowl",
    description: "Frais, équilibrés, savoureux. Un repas complet dans un bol.",
  },
  {
    icon: "🍽️",
    name: "Assiettes",
    description: "Viandes grillées, accompagnements généreux.",
  },
  {
    icon: "🥞",
    name: "Crêpes",
    description: "Sucrées ou salées, préparées à la commande.",
  },
  {
    icon: "🎁",
    name: "Formules",
    description: "Sandwich + frites + boisson. Le bon deal.",
  },
  {
    icon: "🍰",
    name: "Desserts Maison",
    description: "Tiramisu, panna cotta, coulant chocolat. Faits maison.",
  },
  {
    icon: "🥤",
    name: "Smoothies & Milkshakes",
    description: "Fruits frais, textures crémeuses, saveurs intenses.",
  },
  {
    icon: "🧊",
    name: "Boissons",
    description: "Sodas, jus pressés, boissons chaudes et fraîches.",
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".menu-card"),
          {
            opacity: 0,
            y: 40,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%",
            },
          }
        );
      }
    );
  }, []);

  return (
    <section
      id="menu"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow bg */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(223,135,174,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Notre carte</span>
          <h2
            className="font-pricedown"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#ffffff",
              textShadow: "none",
              marginTop: "0.5rem",
              letterSpacing: "4px",
            }}
          >
            LA CARTE
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: "1rem",
              marginTop: "1rem",
              letterSpacing: "2px",
            }}
          >
            Tous les jours · 17h00 – 05h00
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
          className="menu-grid"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="menu-card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "12px",
                padding: "1.75rem 1.25rem",
                textAlign: "center",
                opacity: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = "rgba(223,135,174,0.6)";
                t.style.boxShadow =
                  "0 0 20px rgba(223,135,174,0.2), 0 0 40px rgba(223,135,174,0.1), inset 0 0 20px rgba(223,135,174,0.05)";
                t.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = "var(--line)";
                t.style.boxShadow = "none";
                t.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  filter: "drop-shadow(0 0 8px rgba(223,135,174,0.4))",
                }}
              >
                {cat.icon}
              </div>

              {/* Name */}
              <h3
                className="font-pricedown"
                style={{
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  textShadow: "0 0 8px rgba(223,135,174,0.5)",
                  marginBottom: "0.6rem",
                  letterSpacing: "1px",
                }}
              >
                {cat.name}
              </h3>

              {/* Desc */}
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                }}
              >
                {cat.description}
              </p>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(223,135,174,0.4), transparent)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Price range */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.5rem",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            background: "var(--surface)",
          }}
        >
          <span
            style={{
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontSize: "1rem",
              color: "var(--text-dim)",
              letterSpacing: "2px",
            }}
          >
            Prix moyen par personne ·{" "}
            <span
              className="text-neon-gold"
              style={{ fontWeight: 700, fontSize: "1.1rem" }}
            >
              10 – 20€
            </span>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
