import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueCare Supply - Leader en Fournitures Médicales",
  description: "Le partenaire stratégique n°1 pour l'approvisionnement médical au Québec. Zéro rupture, livraison garantie, excellence absolue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}
