import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600","700"],
  variable: "--font-cormorant",
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://unboundbyv.com"),

  title: {
    default: "Unbound by V",
    template: "%s | Unbound by V",
  },

  description:
    "Thoughts on building in public, personal growth, systems, and entrepreneurship.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Unbound by V",
    description:
      "Thoughts on building in public, personal growth, systems, and entrepreneurship.",
    url: "https://unboundbyv.com",
    siteName: "Unbound by V",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Unbound by V",
    description:
      "Thoughts on building in public, personal growth, systems, and entrepreneurship.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
  <html
    lang="en"
    className={`${manrope.variable} ${greatVibes.variable} ${cormorant.variable}`}
  >
    <body>
      <Header />
      {children}
      <Footer />
      </body>
  </html>
);
}