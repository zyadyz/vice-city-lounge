"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "4.8★", label: "Note Google", color: "#FFB800" },
  { value: "82", label: "Avis clients", color: "#ffffff" },
  { value: "17h–5h", label: "Ouverture", color: "#00E5FF" },
  { value: "10–20€", label: "Prix moyen", color: "#ffffff" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".stat-item"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            },
          }
        );
      });
    });
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-item"
            style={{
              textAlign: "center",
              opacity: 0,
            }}
          >
            <div
              className="font-pricedown"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: stat.color,
                textShadow: `0 0 10px ${stat.color}, 0 0 30px ${stat.color}`,
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontWeight: 600,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          #stats > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
