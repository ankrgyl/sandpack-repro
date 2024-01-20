import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useServerInsertedHTML } from "next/navigation";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SandPackCSS />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

const SandPackCSS = () => {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
        id="sandpack"
      />
    );
  });
  return null;
};
