import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-wa";
import { CookieConsent } from "@/components/cookie-consent";
import { site } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camerepse.it"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "affittacamere Porto Sant'Elpidio",
    "staff housing Marche",
    "alloggi personale Fermo",
    "camere per aziende Porto Sant'Elpidio",
    "appartamento condiviso Porto Sant'Elpidio",
    "Es Vedra Via Romagna",
    "alloggi stagionali Adriatico",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "it_IT",
    siteName: site.name,
    url: "https://camerepse.it",
    images: [{ url: "/img/esvedra_facciata.jpg", width: 1100, height: 1466, alt: site.name }],
  },
  alternates: { canonical: "https://camerepse.it" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  );
}
