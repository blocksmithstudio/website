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
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.webp">
            <source src="/videos/Chunk Collector Animation.webm" type="video/webm" media="(min-width: 721px)" />
            <source src="/videos/Chunk Collector Animation.mp4" type="video/mp4" media="(min-width: 721px)" />
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
          <div className="solution-pose" aria-hidden="true">
            <Image
              src="/images/pose/aglerr-pose.webp"
              alt=""
              width={256}
              height={256}
              sizes="(max-width: 720px) 118vw, 74vw"
            />
          </div>

          <div className="solution-copy solution-copy-left" data-reveal="left">
            <span className="eyebrow">What We Do</span>
            <h2>A one-stop solution for your Minecraft server needs.</h2>
            <p>We provides the developers, builders, artists, and technical support your Minecraft server needs, all under one studio.</p>
          </div>

          <div className="solution-line" aria-hidden="true" />

          <div className="solution-copy solution-copy-right" data-reveal="right">
            <h2>We can put your server development on autopilot.</h2>
            <p>We monitor, update, fix, optimize, and support the development side so your team can focus on the innovation and the community.</p>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="container products-heading" data-reveal="down">
          <SectionHeader
            eyebrow="Our Products"
            title="Work We've Produced"
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
        <div className="faq-pose" aria-hidden="true">
          <Image
            src="/images/pose/welcome.webp"
            alt=""
            width={256}
            height={256}
            sizes="(max-width: 720px) 78vw, 36vw"
          />
        </div>

        <div className="container faq-grid">
          <div data-reveal="down">
            <SectionHeader
              eyebrow="FAQ"
              title="We've got answers for your questions."
              description="Everything you need to know before starting a project with us!"
            />
          </div>

          <div data-reveal="down">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="cta section" data-reveal="down">
        <div className="container cta-card">
          <div className="cta-copy">
            <span className="eyebrow">Long-term support</span>
            <h2>One team for your plugins, systems, and maintenance.</h2>
            <p>
              From custom development to daily operational technical support, We keep your server moving, eliminating your worries about server stability.
            </p>
            <Link className="button button-primary" href="/contact">
              Work With Us
            </Link>
          </div>

          <div className="cta-pose" aria-hidden="true">
            <Image
              src="/images/pose/blacksmith.webp"
              alt=""
              width={512}
              height={512}
              sizes="(max-width: 720px) 72vw, 360px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
