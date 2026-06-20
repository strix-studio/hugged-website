import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hugged.app"),
  title: {
    default: "Hugged | Calm support for modern motherhood",
    template: "%s | Hugged",
  },
  description:
    "Hugged is a premium emotionally intelligent parenting ecosystem for venting freely, learning calmly, and finding real support.",
  openGraph: {
    title: "Hugged | Calm support for modern motherhood",
    description:
      "A breathable one-page ecosystem for mothers who need emotional safety, expert guidance, and community.",
    url: "https://hugged.app",
    siteName: "Hugged",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugged | Calm support for modern motherhood",
    description:
      "A premium parenting ecosystem designed to feel soft, safe, and emotionally intelligent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
