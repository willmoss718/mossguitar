"use client";

import { useState } from "react";

type ContactBubbleProps = {
  email: string;
  className?: string;
};

export function ContactBubble({ email, className = "" }: ContactBubbleProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className={className}
      aria-label={`Copy ${email} to clipboard`}
    >
      <span>Contact</span>
      <span
        aria-live="polite"
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
          copied ? "ml-3 max-w-56 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {email}
      </span>
    </button>
  );
}
