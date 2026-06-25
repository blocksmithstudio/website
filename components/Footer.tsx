import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Products", href: "/#products" },
  { label: "FAQ", href: "/#faq" },
  { label: "Wiki", href: "/wiki" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span>{site.name}</span>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Blocksmith Studio. All rights reserved.</span>
        <span>Crafted for Minecraft creators.</span>
      </div>
    </footer>
  );
}
