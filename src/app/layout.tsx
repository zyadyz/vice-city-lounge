import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vice City Lounge | Fast Food · Charleroi · Ouvert jusqu'à 5h",
  description: "Vice City Lounge — Fast food, cuisine turque et lounge à Charleroi. Ouvert tous les jours de 17h à 5h du matin. Sandwiches, bowls, crêpes, desserts maison.",
  keywords: "Vice City Lounge, fast food Charleroi, restaurant turc Charleroi, lounge Charleroi, livraison Charleroi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
