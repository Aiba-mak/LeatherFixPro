"use client";

import { useState } from "react";

const PRIMARY_PHONE_DISPLAY = "+1 (445) 225-3515";
const PRIMARY_PHONE_LINK = "tel:+14452253515";

const navLinks = [
  { label: "Services", href: "#services" },
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
        <div className="desktop-nav-wrapper">
          <nav className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-contact">
            <a className="header-phone" href={PRIMARY_PHONE_LINK}>
              {PRIMARY_PHONE_DISPLAY}
            </a>
            <a className="quote-cta" href="#quote">
              Request a Quote
            </a>
            <a className="call-now" href={PRIMARY_PHONE_LINK}>
              Call Now
            </a>
          </div>
        </div>
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
        <div className="mobile-contact">
          <a className="header-phone" href={PRIMARY_PHONE_LINK} onClick={handleLinkClick}>
            {PRIMARY_PHONE_DISPLAY}
          </a>
        </div>
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
        <a className="quote-cta" href="#quote" onClick={handleLinkClick}>
          Request a Quote
        </a>
        <a className="call-now" href={PRIMARY_PHONE_LINK} onClick={handleLinkClick}>
          Call Now
        </a>
      </nav>
    </header>
  );
}

