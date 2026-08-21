import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lekarkar-portfolio.karkay.chatgpt.site"),
  title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
  description:
    "Hydrologist and water resources engineer working on water availability, drought, groundwater recharge and climate adaptation.",
  openGraph: {
    title: "Katoria Lekarkar | Hydrologist & Water Resources Engineer",
    description:
      "Making complex water systems clear—from hydrological evidence to practical climate solutions.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
