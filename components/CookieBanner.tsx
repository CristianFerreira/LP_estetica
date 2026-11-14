"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "sk_cookie_consent";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function grantConsent() {
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;

    if (saved === "granted") {
      grantConsent();
      return;
    }

    if (saved === "denied") {
      return;
    }

    setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    grantConsent();
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-chumbo/10 bg-branco p-5 shadow-[0_12px_40px_rgba(44,51,56,0.12)] md:left-auto md:right-6 md:max-w-md"
    >
      <p className="text-sm leading-relaxed text-chumbo/80">
        Utilizamos cookies essenciais e de análise (Google Analytics) para
        melhorar a sua experiência e compreender como visita o nosso espaço
        digital.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleRefuse}
          className="rounded-xl border border-chumbo/20 bg-branco px-4 py-2.5 text-sm font-medium text-chumbo transition-colors hover:bg-off-white"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-xl border border-verde/30 bg-branco px-4 py-2.5 text-sm font-medium text-verde transition-colors hover:bg-verde/5"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
