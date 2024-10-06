import type { Metadata } from "next";
import "./globals.css";
import { montserrat300 } from "./fonts/montserrat";
export const metadata: Metadata = {
  title: "Maestro",
  description: "Soothing UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat300.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
