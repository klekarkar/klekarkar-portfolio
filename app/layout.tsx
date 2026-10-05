import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klekarkar.com"),
  title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
  description:
    "Katoria Lekarkar develops practical hydrological solutions to water-resource challenges in a changing climate.",
  authors: [{ name: "Katoria Lekarkar", url: "https://klekarkar.com" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
    description:
      "Practical hydrological solutions for water-resource challenges in a changing climate.",
    type: "website",
    url: "https://klekarkar.com",
    siteName: "Katoria Lekarkar",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Katoria Lekarkar — practical water solutions for a changing climate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
    description:
      "Practical hydrological solutions for water-resource challenges in a changing climate.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
