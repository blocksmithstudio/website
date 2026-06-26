"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "What We Do", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "FAQ", href: "/#faq" },
  { label: "Documentation", href: "https://docs.blocksmith.studio/", external: true }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <nav className="container navbar" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-logo-frame" aria-hidden="true">
            <Image
              className="brand-logo"
              src="/images/blocksmith/Logo Transparent.png"
              alt=""
              width={112}
              height={112}
              priority
            />
          </span>
          <span>{site.name}</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div id="main-menu" className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={"external" in item && item.external ? "_blank" : undefined}
              rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-discord"
            href="https://muhammaddaffa.com/discord"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.2 8.4a9.8 9.8 0 0 1 7.6 0M9.4 15.1c1.7.8 3.5.8 5.2 0" />
              <circle cx="9.2" cy="12.2" r="1" />
              <circle cx="14.8" cy="12.2" r="1" />
              <path d="M7 5.8c-2 2.8-2.5 5.6-2.2 8.5 1.5 1.5 3 2.3 4.5 2.8l1.1-1.5M17 5.8c2 2.8 2.5 5.6 2.2 8.5-1.5 1.5-3 2.3-4.5 2.8l-1.1-1.5M8 6.2l.7-1.4M16 6.2l-.7-1.4" />
            </svg>
            <span>Discord</span>
          </Link>
          <Link
            className="nav-contact"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className="nav-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                <path d="M18 19h-2" />
                <path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
                <path d="M20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
                <path d="M18 17a2 2 0 0 1-2 2h-2" />
              </svg>
            </span>
            <span>Chat With Us</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
