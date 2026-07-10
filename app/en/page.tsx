import type { Metadata } from "next";
import Landing from "../components/Landing";

const OG_IMAGE = "/wiesn/og-image.png";

export const metadata: Metadata = {
  title: "Wiesn Event 2026 · Building Radar",
  description:
    "A day at Building Radar: the latest AI developments for the construction industry, insights from our practice – and then off to Oktoberfest together. September 22, 2026, Munich.",
  openGraph: {
    type: "website",
    siteName: "Building Radar",
    url: "/wiesn/en",
    locale: "en_US",
    title: "Building Radar Wiesn Event 2026",
    description:
      "A day at Building Radar: AI developments for the construction industry, insights from practice – and then off to Oktoberfest together.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Building Radar Wiesn Event 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Radar Wiesn Event 2026",
    description:
      "A day at Building Radar: AI developments for the construction industry, insights from practice – and then off to Oktoberfest together.",
    images: [OG_IMAGE],
  },
};

// Englische Version unter „/en".
export default function Page() {
  return <Landing lang="en" />;
}
