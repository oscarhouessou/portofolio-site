import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oscar HOUESSOU - Data Scientist",
  description:
    "Portfolio professionnel de Oscar HOUESSOU, Data Scientist et Ingénieur en Mathématiques Appliquées",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div id="root" suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
