import Script from "next/script";

/**
 * Google Analytics 4, loaded only when a measurement ID exists.
 *
 * Set NEXT_PUBLIC_GA_ID (looks like G-XXXXXXXXXX) in .env.local and in the
 * host's environment variables. Without it nothing is loaded and no request
 * leaves the visitor's browser, so a fresh clone of this repo stays quiet.
 *
 * This sits alongside Vercel Web Analytics rather than replacing it: Vercel
 * gives quick visit counts in the deployment dashboard, GA gives country,
 * device and how people found the site.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      {/* afterInteractive: analytics must never delay the page painting. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
