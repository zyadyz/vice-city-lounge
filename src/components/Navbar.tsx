"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
        width: "calc(100% - 2rem)",
        maxWidth: "900px",
        borderRadius: "9999px",
        padding: "0.75rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: "#5DD1E3",
        border: "none",
        boxShadow: "none",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <img
          src="/navbar-logo.png"
          alt="Vice City Lounge"
          style={{ height: "52px", width: "auto", display: "block" }}
        />
      </button>

      {/* Nav links — toujours visibles */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          flexWrap: "nowrap",
        }}
        className="nav-links"
      >
        {[
          { label: "Menu", id: "menu" },
          { label: "Avis", id: "avis" },
          { label: "Nous trouver", id: "location" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
              fontSize: "0.95rem",
              fontWeight: 400,
              letterSpacing: "1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.color = "#ffffff";
            }}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => handleNav("order")}
          className=""
          style={{
            background: "#DF87AE",
            color: "#07071A",
            border: "none",
            borderRadius: "9999px",
            padding: "0.5rem 1.25rem",
            fontFamily: "'Pricedown Bl', 'Pricedown', cursive",
            fontWeight: 400,
            fontSize: "0.9rem",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = "var(--accent-light)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "var(--accent)";
          }}
        >
          Commander
        </button>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .nav-links { gap: 0.6rem !important; }
          .nav-links button { font-size: 0.75rem !important; }
          .nav-links .nav-cta { padding: 0.4rem 0.8rem !important; font-size: 0.75rem !important; }
        }
      `}</style>
    </nav>
  );
}
