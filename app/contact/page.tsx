import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a Minecraft plugin or server system project with Blocksmith Studio."
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="container page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Tell us what you want to build.</h1>
        <p>
          Share your Minecraft server idea, target version, current setup, and the problem you want to solve. Clear details help us shape a better technical direction.
        </p>
      </section>

      <section className="container contact-grid section-tight">
        <form className="contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email / Discord
            <input name="contact" placeholder="Email or Discord username" required />
          </label>
          <label>
            Project type
            <select name="projectType" defaultValue="Custom Plugin">
              <option>Custom Plugin</option>
              <option>Server System</option>
              <option>Plugin Maintenance</option>
              <option>Marketplace Product Support</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="details" placeholder="Server version, feature idea, examples, deadline, and budget range." rows={7} required />
          </label>
          <button className="button button-primary" type="submit">
            Send Inquiry
          </button>
        </form>

        <aside className="contact-card">
          <h2>Project brief checklist</h2>
          <ul>
            <li>Server version and platform</li>
            <li>Gameplay type or server mode</li>
            <li>Feature description</li>
            <li>Plugin dependencies</li>
            <li>Deadline and budget range</li>
          </ul>
          <div className="contact-line">
            <span>Email</span>
            <Link href={`mailto:${site.email}`}>{site.email}</Link>
          </div>
          <div className="contact-line">
            <span>Discord</span>
            <span>{site.discord}</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
