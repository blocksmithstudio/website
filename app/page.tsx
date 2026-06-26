import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientStatsSection } from "@/components/ClientStatsSection";
import { FaqList } from "@/components/FaqList";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs, products } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <ScrollAnimations />
      <section className="hero section" id="home">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto" poster="/images/hero-poster.svg">
            <source src="/videos/Chunk Collector Animation.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>You focus on innovation, we handle the rest.</h1>
            <p>
              We are specialized in handling Minecraft server maintenance, custom plugins, and long-term development support for growing servers.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="https://muhammaddaffa.com/discord" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div data-reveal="down">
        <ClientStatsSection />
      </div>

      <section className="solution section" id="services">
        <div className="solution-flow">
          <div className="solution-copy solution-copy-left" data-reveal="left">
            <span className="eyebrow">What We Do</span>
            <h2>We are a one-stop solution for your Minecraft server needs.</h2>
            <p>Ongoing maintenance, custom plugins, textures, 3D models, and builds handled by one technical partner.</p>
          </div>

          <div className="solution-line" aria-hidden="true" />

          <div className="solution-copy solution-copy-right" data-reveal="right">
            <h2>We can put your server development on autopilot.</h2>
            <p>We plan, build, update, fix, and support the development side so your team can focus on players.</p>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="container products-heading" data-reveal="down">
          <SectionHeader
            eyebrow="Our Products"
            title="Tools built for better servers."
          />
        </div>
        <div className="products-showcase">
          <div className="products-separator products-separator-top" aria-hidden="true" />
          <div className="container product-grid">
            {products.map((product, index) => (
              <article
                className="product-list-item"
                key={product.title}
                data-reveal="down"
                style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}
              >
                <Link
                  className="product-list-image"
                  href={product.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${product.title}`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} product preview`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </Link>
                <div className="product-list-copy">
                  <span className="product-eyebrow">{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="products-separator products-separator-bottom" aria-hidden="true" />
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="container faq-grid">
          <div data-reveal="down">
            <SectionHeader
              eyebrow="FAQ"
              title="Before starting a build"
              description="A few common questions from server owners and creators."
            />
          </div>

          <div data-reveal="down">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="cta section" data-reveal="down">
        <div className="container cta-card">
          <span className="eyebrow">Long-term support</span>
          <h2>One team for your plugins, systems, and maintenance.</h2>
          <p>
            From custom development to daily operational technical support, We keep your server moving, eliminating your worries about server stability.
          </p>
          <Link className="button button-primary" href="/contact">
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
