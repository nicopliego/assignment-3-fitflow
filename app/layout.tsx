import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitFlow",
  description: "Una aplicación educativa para organizar hábitos de fitness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
