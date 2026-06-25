import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { clients, faqs, products, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero section" id="home">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="/images/hero-poster.svg">
            <source src="/videos/blocksmith-hero.mp4" type="video/mp4" />
          </video>
          <div className="video-fallback" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot" /> Minecraft systems studio
            </span>
            <h1>You focus on innovation, we handle the rest.</h1>
            <p>
              Blocksmith Studio builds custom Minecraft plugins, server systems, and technical infrastructure for creators who want a smoother, stronger, and more scalable server.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#products">
                View Products
              </Link>
              <Link className="button button-ghost" href="/contact">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Studio capability preview">
            <div className="panel-topline">
              <span>BLOCKSMITH_OS</span>
              <span>ONLINE</span>
            </div>
            <div className="craft-grid" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className={`craft-cell cell-${index + 1}`} />
              ))}
            </div>
            <div className="terminal-card">
              <span className="terminal-label">server build pipeline</span>
              <code>
                plugin.compile();
                <br />
                economy.sync();
                <br />
                players.launch();
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="clients section" aria-label="Clients">
        <div className="container">
          <p className="muted-label">Trusted by server owners, creators, and Minecraft communities</p>
          <div className="client-row">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stats section" aria-label="Stats">
        <div className="container stat-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="products section" id="products">
        <div className="container">
          <SectionHeader
            eyebrow="Products & services"
            title="Technical work that feels invisible to players, but powerful for owners."
            description="From one-off custom plugins to ongoing server systems, every build is designed to support gameplay, retention, monetization, and maintainability."
          />

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <span className="product-eyebrow">{product.eyebrow}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-tags">
                  {product.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="How we work"
            title="Clear scope. Clean systems. Better player experience."
            description="We keep the process simple so your server can move from idea to working system without unnecessary friction."
          />

          <div className="steps">
            <div>
              <span>01</span>
              <h3>Map the server goal</h3>
              <p>We define what the feature should do, why it matters, and how players will interact with it.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Build the system</h3>
              <p>The plugin or server feature is developed with structure, configuration, and future maintenance in mind.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Test and refine</h3>
              <p>We check edge cases, polish the experience, and prepare documentation when needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="container faq-grid">
          <SectionHeader
            eyebrow="FAQ"
            title="Before starting a build"
            description="A few common questions from server owners and creators."
          />

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container cta-card">
          <span className="eyebrow">Ready to craft something?</span>
          <h2>Build your next Minecraft system with Blocksmith Studio.</h2>
          <p>
            Send your idea, server type, target version, and current problems. We will help turn it into a clean technical plan.
          </p>
          <Link className="button button-primary" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
