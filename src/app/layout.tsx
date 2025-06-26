import { AppNavbar } from "@/modules/core/components/AppNavbar";
import { generateDynamicMetadata } from "@/modules/core/helpers/metadata.helper";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = generateDynamicMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="rtl"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} antialiased min-h-screen flex flex-col`}
      >
        <AntdRegistry>
          <ConfigProvider direction="rtl">
            <AppNavbar />
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
