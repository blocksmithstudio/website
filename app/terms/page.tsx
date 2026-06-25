import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Blocksmith Studio services and products."
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <article className="container legal-page">
        <span className="eyebrow">Legal</span>
        <h1>Terms & Conditions</h1>
        <p className="legal-muted">Last updated: June 25, 2026</p>

        <h2>1. Services</h2>
        <p>
          Blocksmith Studio provides Minecraft-related technical services, including custom plugin development, server systems, plugin maintenance, and documentation support.
        </p>

        <h2>2. Project Scope</h2>
        <p>
          Every project should have a clear scope, timeline, deliverables, and revision agreement before development begins. Additional features may require additional cost and timeline adjustment.
        </p>

        <h2>3. Payments</h2>
        <p>
          Payment terms, deposits, milestones, and final delivery requirements should be agreed upon before work starts. Work may be paused if payment terms are not fulfilled.
        </p>

        <h2>4. Revisions</h2>
        <p>
          Revisions are limited to the agreed scope. Major changes, new features, or direction changes may be treated as separate work.
        </p>

        <h2>5. Ownership</h2>
        <p>
          Ownership of custom work depends on the project agreement. Marketplace products, reusable libraries, and internal development tools may remain owned by Blocksmith Studio unless stated otherwise.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Blocksmith Studio is not responsible for server damage, data loss, third-party plugin conflicts, or business losses caused by misuse, unsupported modifications, or unapproved environments.
        </p>
      </article>
    </main>
  );
}
