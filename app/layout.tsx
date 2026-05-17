import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import CampaignHeader from "./components/CampaignHeader";
import CampaignFooter from "./components/CampaignFooter";
import CampaignDivider from "./components/CampaignDivider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lizerfornavajonation.com"),
  title: {
    default: "Myron Lizer for Navajo Nation President",
    template: "%s | Myron Lizer for Navajo Nation President",
  },
  description:
    "Official campaign website for Myron Lizer, 2026 Navajo Nation President candidate, focused on leadership, opportunity, growth, and prosperity for the Navajo Nation.",
  openGraph: {
    siteName: "Myron Lizer for Navajo Nation President",
    type: "website",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CampaignHeader />

        {children}

        <CampaignDivider />
        <CampaignFooter />

        <Analytics />
      </body>
    </html>
  );
}