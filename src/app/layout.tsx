import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Đạt Digital Marketing | Agency Cho Thuê TKQC & Digital Media",
  description:
    "Giải pháp Digital Marketing toàn diện – Cho thuê tài khoản quảng cáo Facebook, Google, TikTok uy tín. Xác minh tích xanh, quản lý ads, content & social media chuyên nghiệp.",
  keywords: ["cho thuê tài khoản quảng cáo", "TKQC Facebook", "Google Ads", "TikTok Ads", "digital marketing", "agency quảng cáo"],
  authors: [{ name: "Đạt Digital Marketing" }],
  openGraph: {
    title: "Đạt Digital Marketing | Agency Cho Thuê TKQC & Digital Media",
    description: "Cho thuê TKQC Facebook, Google, TikTok uy tín – Quản lý quảng cáo & Social Media chuyên nghiệp.",
    url: "https://dat.digital",
    siteName: "Đạt Digital Marketing",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đạt Digital Marketing | Agency Cho Thuê TKQC",
    description: "Cho thuê TKQC Facebook, Google, TikTok uy tín – Tăng trưởng doanh số hiệu quả.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${inter.variable} ${jakarta.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
