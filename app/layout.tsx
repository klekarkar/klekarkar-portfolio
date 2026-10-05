import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klekarkar.com"),
  title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
  description:
    "Katoria Lekarkar is a hydrologist and water resources engineer connecting climate science, modelling and practical water solutions in Europe and Africa.",
  authors: [{ name: "Katoria Lekarkar", url: "https://klekarkar.com" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
    description:
      "Making complex water systems clear—from hydrological evidence to practical climate solutions.",
    type: "website",
    url: "https://klekarkar.com",
    siteName: "Katoria Lekarkar",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Katoria Lekarkar — Making water systems clear" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
    description:
      "Making complex water systems clear—from hydrological evidence to practical climate solutions.",
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
