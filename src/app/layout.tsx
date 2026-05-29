import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAERA | Certified Foreign Employment Agency",
  description: "DAERA is a government-licensed foreign employment agency connecting talented candidates with premier career opportunities in Europe, the Middle East, and East Asia. Fast, secure, and ethical visa processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

