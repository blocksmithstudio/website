import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const quickLinks: FooterLinkItem[] = [
  { label: "Home", href: "/#home" },
  { label: "What We Do", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "FAQ", href: "/#faq" },
  { label: "Documentation", href: "https://docs.blocksmith.studio/", external: true },
  { label: "Contact", href: "/contact" }
];

const platformLinks: FooterLinkItem[] = [
  { label: "Spigot", href: "https://www.spigotmc.org/", external: true },
  { label: "BuiltByBit", href: "https://builtbybit.com/", external: true }
];

const followLinks: FooterLinkItem[] = [
  { label: "Discord", href: "https://muhammaddaffa.com/discord", external: true },
  { label: "GitHub", href: "https://github.com/mdaffa48", external: true }
];

function FooterLink({ href, label, external }: FooterLinkItem) {
  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {label}
    </Link>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Discord") {
    return (
      <svg className="footer-discord-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 8.4a9.8 9.8 0 0 1 7.6 0M9.4 15.1c1.7.8 3.5.8 5.2 0" />
        <circle cx="9.2" cy="12.2" r="1" />
        <circle cx="14.8" cy="12.2" r="1" />
        <path d="M7 5.8c-2 2.8-2.5 5.6-2.2 8.5 1.5 1.5 3 2.3 4.5 2.8l1.1-1.5M17 5.8c2 2.8 2.5 5.6 2.2 8.5-1.5 1.5-3 2.3-4.5 2.8l-1.1-1.5M8 6.2l.7-1.4M16 6.2l-.7-1.4" />
      </svg>
    );
  }

  return (
    <svg className="footer-github-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .9-.3 2.7 1a9.6 9.6 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.3 9.3 0 0 0 12 2.7Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="brand footer-brand" href="/">
            <span className="brand-logo-frame" aria-hidden="true">
              <Image
                className="brand-logo"
                src="/images/blocksmith/Logo Transparent.png"
                alt=""
                width={112}
                height={112}
              />
            </span>
            <span>{site.name}</span>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer-link-sections">
          <div className="footer-link-section">
            <h2>Quick Links</h2>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <FooterLink href={link.href} label={link.label} external={link.external} key={link.href} />
              ))}
            </div>
          </div>

          <div className="footer-link-section">
            <h2>Platforms</h2>
            <div className="footer-links">
              {platformLinks.map((link) => (
                <FooterLink href={link.href} label={link.label} external={link.external} key={link.href} />
              ))}
            </div>
          </div>

          <div className="footer-link-section">
            <h2>Follow Us</h2>
            <div className="footer-social-links">
              {followLinks.map((link) => (
                <Link
                  className="footer-social-link"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  key={link.href}
                >
                  <SocialIcon label={link.label} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-legal-line">
          <span>© {new Date().getFullYear()} Blocksmith Studio. All rights reserved.</span>
          <span aria-hidden="true">|</span>
          <Link href="/terms" target="_blank" rel="noopener noreferrer">
            Terms
          </Link>
          <span aria-hidden="true">|</span>
          <Link href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </div>
        <span>Crafted for Minecraft creators.</span>
      </div>
    </footer>
  );
}
