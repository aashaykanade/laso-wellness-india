declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const googleAdsIds = {
  whatsapp: "AW-18313267517/flUgCOi0-e0cEL2SuZxE",
  callNow: "AW-18313267517/Kyx-CNqfhe4cEL2SuZxE",
};

export const trackGoogleAdsConversion = (sendTo: string) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) {
    console.warn("Google Ads gtag not loaded");
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
  });
};
