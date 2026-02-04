import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueCareSupply - Leader en Fournitures Médicales",
  description:
    "Le partenaire stratégique n°1 pour l'approvisionnement médical au Québec. Zéro rupture, livraison garantie, excellence absolue.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <body>
        <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
