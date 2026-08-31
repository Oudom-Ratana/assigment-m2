import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "TosNham | Sharing the Taste of Our Heritage",
  description: "Discover Cambodian recipes, stories, and culinary traditions with TosNham.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <NavbarComponent />
        <main className="flex-1">{children}</main>
        <FooterComponent />
      </body>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}