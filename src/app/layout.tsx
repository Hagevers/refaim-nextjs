import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const rubik = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "עמותת רפאים",
  description: "אתר עמותת רפאים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="he" className="scroll-smooth">
        <head>
          <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        </head>
        <body className={rubik.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
