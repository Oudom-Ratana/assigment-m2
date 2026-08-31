import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navigation/NavbarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khmer Table — The Soul of Khmer Cuisine",
  description:
    "Authentic Khmer cuisine inspired by tradition, prepared for today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarComponent />
        <main className="flex-1">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}