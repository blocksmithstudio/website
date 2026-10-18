import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const linkGroups: { title: string; links: FooterLinkItem[] }[] = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/#home" },
      { label: "What We Do", href: "/#services" },
      { label: "Products", href: "/#products" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.blocksmith.studio/", external: true },
      { label: "Service Status", href: "https://status.blocksmith.studio/", external: true },
      { label: "Panel", href: "https://panel.blocksmith.studio/", external: true },
      { label: "Maven Repository", href: "https://repo.blocksmith.studio", external: true }
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "https://muhammaddaffa.com/discord", external: true },
      { label: "GitHub", href: "https://github.com/blocksmithstudio", external: true },
      { label: "Spigot", href: "https://www.spigotmc.org/resources/authors/aglerr.549972/", external: true },
      { label: "BuiltByBit", href: "https://builtbybit.com/store/blocksmithplugins.158/", external: true }
    ]
  }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-art" aria-hidden="true" />
      <div className="container footer-content">
        <div className="footer-grid">
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
            <p>Plugins, custom development, and long-term support for your Minecraft server.</p>
            <Link className="footer-contact" href={`mailto:${site.email}`}>
              {site.email}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="footer-link-sections">
            {linkGroups.map(({ title, links }) => (
              <nav className="footer-link-section" aria-label={title} key={title}>
                <h2>{title}</h2>
                <div className="footer-links">
                  {links.map(({ label, href, external }) => (
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      key={href}
                    >
                      {label}
                      {external && <span aria-hidden="true">↗</span>}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        <Link className="footer-wordmark" href="/" aria-label="Blocksmith Studio home">
          Blocksmith<span className="footer-wordmark-dot" aria-hidden="true">.</span>
        </Link>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Blocksmith Studio. All rights reserved.</span>
          <span className="footer-signoff">Made for Minecraft.</span>
        </div>
      </div>
    </footer>
  );
}
