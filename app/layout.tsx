import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "삼정펄프 - 지속 가능한 친환경 제품",
  description:
    "삼정펄프는 지속 가능한 경영 철학을 바탕으로 친환경 제품을 제조하는 대한민국 대표 펄프 기업입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
