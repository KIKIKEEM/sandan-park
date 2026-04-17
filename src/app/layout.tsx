import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "산단파크 — 내 삶을 레벨업하는 산업단지",
  description: "산업단지 청년 근로자를 위한 온·오프 믹스 RPG 게이미피케이션 플랫폼",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full gradient-bg">
        <div className="mx-auto max-w-[480px] min-h-screen relative pb-20">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
