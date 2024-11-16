import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "유나로드",
  description: "유나가 추천하는 맛집지도 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const naverClientID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "";
  return (
    <html lang="en">
      <Head>
        <title>유나로드</title>
      </Head>
      <body>
        <div className="inner-layout">{children}</div>
      </body>
    </html>
  );
}
