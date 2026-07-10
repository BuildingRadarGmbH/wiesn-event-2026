import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// Produktions-Origin (für absolute OG-/Twitter-URLs). Bei abweichender
// Webflow-Domain hier anpassen. Assets liegen wegen basePath unter /wiesn.
const SITE = "https://buildingradar.com";
const OG_IMAGE = "/wiesn/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Wiesn-Event 2026 · Building Radar",
  description:
    "Ein Tag bei Building Radar: die neuesten KI-Entwicklungen für die Baubranche, Einblicke aus unserer Praxis – und danach gemeinsam aufs Oktoberfest. 22. September 2026, München.",
  icons: {
    icon: [
      { url: "/wiesn/icon.svg", type: "image/svg+xml" },
      { url: "/wiesn/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/wiesn/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/wiesn/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/wiesn/favicon.ico" },
    ],
    shortcut: ["/wiesn/favicon.ico"],
    apple: [{ url: "/wiesn/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Building Radar",
    url: "/wiesn",
    locale: "de_DE",
    title: "Building Radar Wiesn-Event 2026",
    description:
      "Ein Tag bei Building Radar: KI-Entwicklungen für die Baubranche, Einblicke aus der Praxis – und danach gemeinsam aufs Oktoberfest.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Building Radar Wiesn-Event 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Radar Wiesn-Event 2026",
    description:
      "Ein Tag bei Building Radar: KI-Entwicklungen für die Baubranche, Einblicke aus der Praxis – und danach gemeinsam aufs Oktoberfest.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${roboto.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
