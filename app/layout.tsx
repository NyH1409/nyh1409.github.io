import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script"; // 1. On importe le composant Script
import TranslationProvider from "../components/provider/provider";

export const metadata: Metadata = {
  title: "Ny Hasina VAGNO",
  description: "Portefolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="photo.jpeg" type="image/*" />
        {/* 2. On utilise Script avec une stratégie optimisée */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T7ZLX6T7');
          `}
        </Script>
      </head>
      <body>
        {/* 3. Ajout du code noscript (obligatoire pour le fonctionnement complet) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7ZLX6T7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
