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
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
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

        <div className="contact-sidebar">
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
          </aside>

          <div className="discord-widget">
            <div className="discord-widget-heading">
              <div>
                <span className="eyebrow">Discord</span>
                <h2>Join our community</h2>
              </div>
              <Link
                href="https://muhammaddaffa.com/discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Discord
              </Link>
            </div>
            <iframe
              src="https://discord.com/widget?id=1306875574899441674&theme=dark"
              width="350"
              height="500"
              allowTransparency
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              loading="eager"
              title="Blocksmith Studio Discord server"
            />
            <p className="discord-widget-fallback">
              Widget unavailable?{" "}
              <Link
                href="https://muhammaddaffa.com/discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the server directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
