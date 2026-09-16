import Loading from "@/modules/core/components/AppLoading";
import { AppNavbar } from "@/modules/core/components/AppNavbar";
import {
  geistMonoFont,
  geistSansFont,
  vazirmatnFont,
} from "@/modules/core/constants/fonts";
import { layoutMetadata } from "@/modules/core/helpers/metadata.helper";
import { cn } from "@/modules/ui/helpers/cn.helper";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = layoutMetadata();

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
        className={cn(
          `antialiased h-screen flex flex-col`,
          geistSansFont.variable,
          geistMonoFont.variable,
          vazirmatnFont.variable
        )}
      >
        <AntdRegistry>
          <ConfigProvider direction="rtl">
            <Suspense fallback={<Loading />}>
              <AppNavbar />
              {children}
            </Suspense>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
