import type { Metadata } from "next";
import { Roboto, Bebas_Neue, Archivo_Black } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], 
  style: ["italic", "normal"],
  variable: '--font-roboto'
});

// const bebas_neue = Bebas_Neue({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: '--font-bebas-neue'
// })

// const archivo_black = Archivo_Black({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: '--font-archivo-black'
// })

export const metadata: Metadata = {
  title: "Marvel Heroes",
  description: "Veja seus herois da Marvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
