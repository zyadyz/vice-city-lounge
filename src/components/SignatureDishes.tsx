"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const dishes = [
  {
    name: "Le Sandwich Vice City",
    category: "Sandwiches",
    description:
      "Notre sandwich signature, généreusement garni de viande fraîche, crudités croquantes et sauce maison. Accompagné de frites dorées et croustillantes. Le classique qui revient toujours.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    alt: "Sandwich Vice City",
    badge: "★ Signature",
    badgeColor: "#FFB800",
  },
  {
    name: "Bowl Frais",
    category: "Bowl",
    description:
      "Frais, savoureux et équilibré. Notre bowl du moment combine les meilleurs légumes de saison, protéines tendres et sauces légères. Un repas complet qui fait du bien.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    alt: "Bowl frais",
    badge: "Healthy",
    badgeColor: "#00E5FF",
  },
  {
    name: "Crêpes Maison",
    category: "Crêpes",
    description:
      "Sucrées ou salées, nos crêpes sont préparées avec amour à partir d'une recette maison. Garnies généreusement, elles sont parfaites à toute heure de la nuit.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    alt: "Crêpes maison",
    badge: "Fait maison",
    badgeColor: "#DF87AE",
  },
  {
    name: "Desserts Maison",
    category: "Desserts",
    description:
      "Tiramisu fait maison chaque matin, coulants au chocolat, panna cotta vanille. Nos desserts sont préparés avec passion. Une fin de repas qui restera gravée dans ta mémoire.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    alt: "Dessert tiramisu maison",
    badge: "Pur plaisir",
    badgeColor: "#FF6B35",
  },
];

interface DishProps {
  dish: typeof dishes[0];
  reversed: boolean;
  index: number;
}

function DishRow({ dish, reversed, index }: DishProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!rowRef.current) return;

        const imgEl = rowRef.current.querySelector(".dish-img");
        const textEl = rowRef.current.querySelector(".dish-text");

        if (imgEl) {
          gsap.fromTo(
            imgEl,
            { opacity: 0, x: reversed ? 60 : -60 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: rowRef.current, start: "top 75%" },
            }
          );
        }
        if (textEl) {
          gsap.fromTo(
            textEl.querySelectorAll(".text-reveal"),
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: { trigger: rowRef.current, start: "top 72%" },
            }
          );
        }
      }
    );
  }, [reversed]);

  return (
    <div
      ref={rowRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
        padding: "5rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        direction: reversed ? "rtl" : "ltr",
      }}
      className="dish-row"
    >
      {/* Image */}
      <div
        className="dish-img"
        style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          opacity: 0,
          direction: "ltr",
          boxShadow: `0 0 30px rgba(223,135,174,0.15), 0 20px 50px rgba(0,0,0,0.5)`,
        }}
      >
        <Image
          src={dish.image}
          alt={dish.alt}
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "brightness(0.9) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(223,135,174,0.08) 0%, rgba(0,229,255,0.04) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Index number */}
        <div
          className="font-pricedown"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "4rem",
            color: "rgba(223,135,174,0.15)",
            lineHeight: 1,
          }}
        >
          0{index + 1}
        </div>
      </div>

      {/* Text */}
      <div className="dish-text" style={{ direction: "ltr" }}>
        {/* Badge */}
        <div className="text-reveal" style={{ opacity: 0, marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.3rem 0.9rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: dish.badgeColor,
              border: `1px solid ${dish.badgeColor}`,
              boxShadow: `0 0 10px ${dish.badgeColor}44`,
            }}
          >
            {dish.badge}
          </span>
        </div>

        <span className="section-label text-reveal" style={{ opacity: 0 }}>
          {dish.category}
        </span>

        <h3
          className="font-pricedown text-reveal"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.1,
            marginBottom: "1.2rem",
            opacity: 0,
          }}
        >
          {dish.name}
        </h3>

        <p
          className="text-reveal"
          style={{
            color: "var(--text-dim)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            opacity: 0,
          }}
        >
          {dish.description}
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dish-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 2.5rem !important;
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function SignatureDishes() {
  return (
    <section
      style={{
        background: "var(--bg)",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
        <span className="section-label">Nos spécialités</span>
        <h2
          className="font-pricedown"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginTop: "0.5rem",
          }}
        >
          Plats Signature
        </h2>
      </div>

      {/* Separator line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          maxWidth: "600px",
          margin: "0 auto",
          opacity: 0.4,
        }}
      />

      {dishes.map((dish, i) => (
        <div
          key={i}
          style={{
            borderBottom: i < dishes.length - 1 ? "1px solid var(--line)" : "none",
          }}
        >
          <DishRow dish={dish} reversed={i % 2 === 1} index={i} />
        </div>
      ))}
    </section>
  );
}
