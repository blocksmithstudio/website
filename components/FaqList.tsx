"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: Faq[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (question: string) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems);

      if (nextItems.has(question)) {
        nextItems.delete(question);
      } else {
        nextItems.add(question);
      }

      return nextItems;
    });
  };

  return (
    <div className="faq-list">
      {items.map((faq) => {
        const isOpen = openItems.has(faq.question);
        const panelId = `faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
        const triggerId = `${panelId}-trigger`;

        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
            <button
              className="faq-trigger"
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(faq.question)}
            >
              {faq.question}
            </button>
            <div className="faq-panel" id={panelId} role="region" aria-labelledby={triggerId}>
              <div className="faq-panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
