import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Prathamesh Ratthe | Gen AI Engineer",
  description: "Gen AI Engineer at TCS, building enterprise AI solutions for global clients. Experienced in LLMs, Python, FastAPI, SAP BTP, and cloud-native technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
