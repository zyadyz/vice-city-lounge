export default function Footer() {
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#04040F",
        borderTop: "1px solid var(--line)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <img
              src="/navbar-logo.png"
              alt="Vice City Lounge"
              style={{ height: "70px", width: "auto", marginBottom: "1rem", display: "block" }}
            />
            <p
              style={{
                color: "var(--text-dim)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "240px",
              }}
            >
              Fast food, cuisine turque et lounge à Charleroi. Ouvert jusqu&apos;à 5h pour les noctambules.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
              {[
                { icon: "⭐", value: "4.8" },
                { icon: "💬", value: "82 avis" },
              ].map((item) => (
                <span
                  key={item.value}
                  style={{
                    padding: "0.3rem 0.7rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--line)",
                    fontSize: "0.8rem",
                    color: "var(--text-dim)",
                  }}
                >
                  {item.icon} {item.value}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Menu", id: "menu" },
                { label: "Avis", id: "avis" },
                { label: "Nous trouver", id: "location" },
                { label: "Commander", id: "order" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-dim)",
                    fontSize: "0.9rem",
                    textAlign: "left",
                    padding: 0,
                    fontFamily: "'Rajdhani', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = "var(--text-dim)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <div style={{ color: "var(--text-dim)", fontSize: "0.75rem", marginBottom: "0.2rem" }}>
                  Adresse
                </div>
                <div style={{ color: "var(--text)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Rue des Haies 1<br />
                  6001 Charleroi
                </div>
              </div>
              <div>
                <div style={{ color: "var(--text-dim)", fontSize: "0.75rem", marginBottom: "0.2rem" }}>
                  Téléphone
                </div>
                <a
                  href="tel:+32471730578"
                  style={{
                    color: "var(--accent-2)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +32 471 73 05 78
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              Horaires
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem",
                background: "rgba(223,135,174,0.06)",
                borderRadius: "8px",
                border: "1px solid var(--line)",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🌙</span>
              <div>
                <div
                  style={{
                    color: "var(--text)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  17h00 – 05h00
                </div>
                <div style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
                  Tous les jours
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              {["Sur place", "À emporter", "Livraison"].map((s) => (
                <div
                  key={s}
                  style={{
                    color: "var(--text-dim)",
                    fontSize: "0.85rem",
                    padding: "0.25rem 0",
                    borderBottom: "1px solid rgba(223,135,174,0.06)",
                  }}
                >
                  ✓ {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
            © 2025 Vice City Lounge · Charleroi · Belgique
          </p>
          <p style={{ color: "var(--text-dim)", fontSize: "0.75rem", letterSpacing: "2px" }}>
            FAST FOOD · LOUNGE · 17H – 5H
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
