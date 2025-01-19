import type { Metadata } from "next";
import { Atma } from "next/font/google";
import Provider from "@/components/Provider";
import "./globals.css";

const atma = Atma({
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "CodeSnap - Generate Code Snippets",
  description: "Built with Passion by Aman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${atma.className} dark:bg-black bg-gray-100 min-h-screen antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}