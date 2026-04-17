"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const bullets = [
  { icon: "✦", text: "Produits frais, sélectionnés chaque jour" },
  { icon: "✦", text: "Portions généreuses, saveurs authentiques" },
  { icon: "✦", text: "Ouvert tard — jusqu'à 5h du matin" },
];

export default function Concept() {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        if (imgRef.current) {
          gsap.fromTo(
            imgRef.current,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: imgRef.current, start: "top 75%" },
            }
          );
        }
        if (textRef.current) {
          gsap.fromTo(
            textRef.current.querySelectorAll(".reveal-item"),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: textRef.current, start: "top 75%" },
            }
          );
        }
      }
    );
  }, []);

  return (
    <section
      style={{
        padding: "8rem 1.5rem",
        background: "var(--bg-2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(223,135,174,0.06) 0%, transparent 70%)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="concept-grid"
      >
        {/* Image */}
        <div
          ref={imgRef}
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            opacity: 0,
            boxShadow: "0 0 40px rgba(223,135,174,0.2), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
            alt="Vice City Lounge ambiance"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "brightness(0.85) saturate(1.2)",
            }}
          />
          {/* Neon overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(223,135,174,0.12) 0%, rgba(0,229,255,0.06) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Neon frame */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(223,135,174,0.25)",
              borderRadius: "16px",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Text */}
        <div ref={textRef}>
          <span className="section-label reveal-item" style={{ opacity: 0 }}>
            Qui sommes-nous
          </span>

          <h2
            className="font-pricedown reveal-item"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              opacity: 0,
            }}
          >
            L&apos;expérience Vice City à Charleroi
          </h2>

          <p
            className="reveal-item"
            style={{
              color: "var(--text-dim)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              opacity: 0,
            }}
          >
            Vice City Lounge, c&apos;est plus qu&apos;un fast food — c&apos;est une destination. Au cœur de Charleroi,
            on vous accueille dans une ambiance néon et 80s Miami pour vous servir une cuisine fraîche,
            copieuse et pleine de saveurs. Sandwiches généreux, bowls équilibrés, crêpes maison,
            desserts préparés chaque matin. Ouvert jusqu&apos;à 5h du matin pour les noctambules et les affamés de la nuit.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {bullets.map((b, i) => (
              <div
                key={i}
                className="reveal-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "1rem",
                    filter: "drop-shadow(0 0 6px var(--accent))",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </span>
                <span style={{ color: "var(--text)", fontSize: "1rem", fontWeight: 500 }}>
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .concept-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
