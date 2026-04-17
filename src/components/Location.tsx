"use client";

import { useEffect, useRef } from "react";

const hours = [
  { day: "Lundi", hours: "17h00 – 05h00" },
  { day: "Mardi", hours: "17h00 – 05h00" },
  { day: "Mercredi", hours: "17h00 – 05h00" },
  { day: "Jeudi", hours: "17h00 – 05h00" },
  { day: "Vendredi", hours: "17h00 – 05h00" },
  { day: "Samedi", hours: "17h00 – 05h00" },
  { day: "Dimanche", hours: "17h00 – 05h00" },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);

  const todayIndex = new Date().getDay();
  // JS: 0=Sunday, 1=Monday...
  const todayHoursIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelectorAll(".loc-reveal"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="location"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Trouvez-nous</span>
          <h2
            className="font-pricedown"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              marginTop: "0.5rem",
            }}
          >
            Nous trouver
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="location-grid"
        >
          {/* Info card */}
          <div
            className="loc-reveal"
            style={{
              background: "var(--surface)",
              borderRadius: "16px",
              padding: "2.5rem",
              border: "1px solid var(--line)",
              opacity: 0,
            }}
          >
            {/* Address */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Adresse
              </div>
              <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "1.05rem" }}>
                Rue des Haies 1<br />
                6001 Charleroi, Belgique
              </p>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Téléphone
              </div>
              <a
                href="tel:+32471730578"
                style={{
                  color: "var(--accent-2)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  letterSpacing: "1px",
                }}
              >
                +32 471 73 05 78
              </a>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "0.75rem",
                }}
              >
                Horaires
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {hours.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.3rem 0",
                      borderBottom: "1px solid var(--line)",
                      background: i === todayHoursIndex ? "rgba(223,135,174,0.05)" : "transparent",
                      borderRadius: "4px",
                      paddingLeft: i === todayHoursIndex ? "0.5rem" : "0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: i === todayHoursIndex ? "var(--accent)" : "var(--text-dim)",
                        fontWeight: i === todayHoursIndex ? 700 : 400,
                      }}
                    >
                      {h.day}
                      {i === todayHoursIndex && (
                        <span style={{ fontSize: "0.65rem", marginLeft: "0.4rem", color: "var(--accent)" }}>
                          (aujourd&apos;hui)
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: i === todayHoursIndex ? "var(--text)" : "var(--text-dim)",
                        fontWeight: i === todayHoursIndex ? 600 : 400,
                      }}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "0.75rem",
                }}
              >
                Services
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["Sur place", "À emporter", "Livraison"].map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      border: "1px solid rgba(0,229,255,0.3)",
                      color: "var(--accent-2)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Call */}
            <a
              href="tel:+32471730578"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.5rem",
                borderRadius: "9999px",
                background: "#DF87AE",
                color: "#07071A",
                fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "1px",
                textDecoration: "none",
                border: "none",
                boxShadow: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              📞 Appeler maintenant
            </a>
          </div>

          {/* Map */}
          <div
            className="loc-reveal"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              opacity: 0,
              border: "1px solid var(--line)",
              boxShadow: "0 0 30px rgba(223,135,174,0.1)",
              height: "500px",
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Rue+des+Haies+1,+6001+Charleroi&output=embed"
              width="100%"
              height="100%"
              style={{
                border: "none",
                display: "block",
                filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vice City Lounge - Carte Google Maps"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
          #location .loc-reveal:last-child {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
