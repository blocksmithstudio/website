import type { Metadata } from "next";
import { wikiTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Documentation hub for Blocksmith Studio products and Minecraft server systems."
};

export default function WikiPage() {
  return (
    <main className="page-shell">
      <section className="container page-hero">
        <span className="eyebrow">Wiki</span>
        <h1>Documentation for products, setup, commands, and permissions.</h1>
        <p>
          This page is prepared as the documentation hub for Blocksmith Studio products. You can expand it later into individual docs for each plugin or server system.
        </p>
      </section>

      <section className="container docs-grid section-tight">
        {wikiTopics.map((topic, index) => (
          <article className="doc-card" key={topic}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{topic}</h2>
            <p>
              Add product-specific notes, examples, screenshots, command usage, configuration explanation, or troubleshooting steps here.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
