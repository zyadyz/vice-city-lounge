"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "/gallery1.png",
    alt: "Vice City Lounge — comptoir snack Charleroi",
    span: 1,
  },
  {
    src: "/gallery2.png",
    alt: "Vice City Lounge — façade extérieure neon Charleroi",
    span: 1,
  },
  {
    src: "/gallery3.png",
    alt: "Vice City Lounge — salle intérieure Charleroi",
    span: 1,
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".gallery-item"),
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
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
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Ambiance</span>
          <h2
            className="font-pricedown"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              marginTop: "0.5rem",
            }}
          >
            Venez vivre l&apos;expérience
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
          className="gallery-grid"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                gridColumn: `span ${img.span}`,
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                opacity: 0,
                cursor: "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.span === 2 ? 350 : 280}
                style={{
                  width: "100%",
                  height: img.span === 2 ? "350px" : "280px",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.8) saturate(1.2)",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.transform = "scale(1.04)";
                  t.style.filter = "brightness(0.9) saturate(1.4)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.transform = "scale(1)";
                  t.style.filter = "brightness(0.8) saturate(1.2)";
                }}
              />
              {/* Neon overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(223,135,174,0.1) 0%, rgba(0,229,255,0.05) 100%)",
                  pointerEvents: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(223,135,174,0.15)",
                  transition: "opacity 0.3s",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-grid > div {
            grid-column: span 1 !important;
          }
          .gallery-grid > div img {
            height: 200px !important;
          }
        }
        @media (max-width: 500px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
