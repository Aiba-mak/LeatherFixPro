"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Before/After", href: "#before-after" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand">
          LeatherFixPro
        </a>
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a className="call-now" href="tel:+18009998877">
            Call Now
          </a>
        </nav>
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          Menu
        </button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={`mobile-${link.href}`}
            href={link.href}
            className="nav-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a className="call-now" href="tel:+18009998877" onClick={handleLinkClick}>
          Call Now
        </a>
      </nav>
    </header>
  );
}

