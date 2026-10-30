import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacker.ai - AI-Powered Coding Companion",
  description: "Supercharge your development workflow with AI intelligence. Generate production-ready code, get smart suggestions, and ship faster with Lacker.ai.",
  keywords: ["AI", "coding", "developer tools", "code generation", "AI assistant"],
  openGraph: {
    title: "Lacker.ai - AI-Powered Coding Companion",
    description: "Supercharge your development workflow with AI intelligence.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
