import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navigation/NavbarComponent";

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
    </html>
  );
}