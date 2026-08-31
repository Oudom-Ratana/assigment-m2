import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
