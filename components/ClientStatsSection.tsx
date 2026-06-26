"use client";

import Image from "next/image";
import { clients } from "@/lib/site";

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="client-logo-group" aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <div className="client-logo-item" key={`${hidden ? "duplicate-" : ""}${client.name}`}>
          <Image
            className="client-logo-image"
            src={client.logo}
            alt={hidden ? "" : client.name}
            width={290}
            height={112}
          />
        </div>
      ))}
    </div>
  );
}

export function ClientStatsSection() {
  return (
    <section className="clients section" aria-labelledby="clients-heading">
      <div className="container">
        <p className="muted-label" id="clients-heading">
          Trusted by server owners and creators
        </p>
      </div>

      <div className="client-slider">
        <div className="client-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
