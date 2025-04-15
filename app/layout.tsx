import "./globals.css";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s – ChromaMirai",
    default: "ChromaMirai – Where Future Meets AI",
  },
  description:
    "Empowering your creative future with AI-driven image generation.",
};

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
