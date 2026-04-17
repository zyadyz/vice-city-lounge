"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    author: "Caroline Riccitelli",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Très bonne expérience ! Les plats sont généreux, bien présentés et surtout délicieux. Le sandwich était bien garni avec des frites croustillantes, et le bowl très frais, savoureux et bien équilibré. On sent que les produits sont de qualité. Service rapide et cadre agréable. Je recommande sans hésiter.",
  },
  {
    author: "Oktay",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Endroit au top à tous les niveaux ! L'hygiène est remarquable. L'accueil et le service sont top, ils sont très respectueux. La nourriture est fraîche et copieuse ! Bon rapport qualité prix ! Je recommande vivement Vice City Lounge.",
  },
  {
    author: "Melissa V.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Un coup de cœur ! On y est allés tard le soir et on a été bluffés par la qualité. Les crêpes maison sont incroyables, et le tiramisu — une tuerie absolue. L'ambiance néon est unique à Charleroi. On reviendra sans hésiter, c'est devenu notre spot préféré.",
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".review-card"),
          { opacity: 0, y: 40, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
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
      id="avis"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(223,135,174,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Ce qu&apos;ils disent</span>
          <h2
            className="font-pricedown"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              marginTop: "0.5rem",
            }}
          >
            Avis Clients
          </h2>

          {/* Overall rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Pricedown', cursive",
                fontSize: "2.5rem",
                color: "#FFB800",
                textShadow: "0 0 15px #FFB800",
              }}
            >
              4.8
            </span>
            <div>
              <div style={{ color: "#FFB800", fontSize: "1.2rem", filter: "drop-shadow(0 0 4px #FFB800)" }}>
                ★★★★★
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", letterSpacing: "1px" }}>
                82 avis Google
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="reviews-grid"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card"
              style={{
                background: "var(--surface)",
                borderRadius: "12px",
                padding: "2rem",
                opacity: 0,
                position: "relative",
                borderLeft: "3px solid var(--accent)",
                boxShadow: "0 0 20px rgba(223,135,174,0.06)",
              }}
            >
              {/* Quote mark */}
              <div
                className="font-pricedown"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontSize: "4rem",
                  color: "rgba(223,135,174,0.1)",
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div
                style={{
                  color: "#FFB800",
                  fontSize: "1.1rem",
                  filter: "drop-shadow(0 0 4px rgba(255,184,0,0.6))",
                  marginBottom: "1rem",
                }}
              >
                {"★".repeat(review.rating)}
              </div>

              {/* Text */}
              <p
                style={{
                  color: "var(--text)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "1rem",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, var(--accent), var(--accent-2))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#07071A",
                    flexShrink: 0,
                  }}
                >
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text)",
                    }}
                  >
                    {review.author}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    {review.date}
                  </div>
                </div>

                {/* Google G */}
                <div
                  style={{
                    marginLeft: "auto",
                    fontSize: "1.1rem",
                    opacity: 0.5,
                  }}
                >
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
