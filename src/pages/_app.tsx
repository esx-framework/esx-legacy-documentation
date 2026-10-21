import { useRedirector } from "src/hooks/useRedirector";
import { AdBanner } from "src/components/ads/ad-banner";
import { Footer } from "src/components/theme/footer";
import { Analytics } from '@vercel/analytics/react';
import { Inter, JetBrains_Mono } from "next/font/google";
import '../style.css';

// Self-hosted at build time, so no request to Google from the visitor
const inter = Inter({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }) {
  const { loading, verifyLocale } = useRedirector();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      {/* <AdBanner /> */}
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}
