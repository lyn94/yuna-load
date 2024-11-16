import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
export const KaKaoAPI = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`;

export const metadata: Metadata = {
  title: "유나로드",
  description: "유나가 추천하는 맛집지도 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>유나로드</title>
      </Head>
      <body>
        <Script strategy="beforeInteractive" src={KaKaoAPI} />
        <div className="inner-layout">{children}</div>
      </body>
    </html>
  );
}
