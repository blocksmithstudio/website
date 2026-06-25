import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Blocksmith Studio."
};

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <article className="container legal-page">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="legal-muted">Last updated: June 25, 2026</p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect basic contact information, project details, server requirements, and communication records when you submit an inquiry or work with Blocksmith Studio.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          Information is used to respond to inquiries, prepare project scopes, provide support, improve services, and communicate project updates.
        </p>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell personal information. Information may only be shared when required to deliver a service, comply with legal obligations, or protect our rights.
        </p>

        <h2>4. Project Confidentiality</h2>
        <p>
          Private project details, server systems, and business information shared with Blocksmith Studio will be treated with care and not publicly disclosed without permission.
        </p>

        <h2>5. Contact</h2>
        <p>
          For privacy-related questions, contact Blocksmith Studio through the contact page or official email.
        </p>
      </article>
    </main>
  );
}
