"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/#products" },
  { label: "FAQ", href: "/#faq" },
  { label: "Wiki", href: "/wiki" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <nav className="container navbar" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span />
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
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
