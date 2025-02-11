import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CSN Technology",
  description: "Construindo soluções inovadoras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
