import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const reaver = localFont({
  src: [
    { path: "./fonts/Reaver-Bold.woff", weight: "700", style: "noraml" },
    {
      path: "./fonts/Reaver-SemiBold.woff",
      weight: "600",
      style: "noraml",
    },
    {
      path: "./fonts/Reaver-Regular.woff",
      weight: "400",
    },
  ],
  variable: "--font-Reaver",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${reaver.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
