import { generateDynamicMetadata } from "@/modules/core/helpers/metadata.helper";
import { Combine } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateDynamicMetadata({ pageName: "Home" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-screen items-center font-sans p-5">
      <main className="flex flex-col gap-[32px] items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <Combine
              strokeWidth={1.9}
              className="lg:size-20 size-16 text-slate-500"
            />
            <Combine
              strokeWidth={1}
              className="lg:size-20 size-16 text-slate-300 absolute inset-0"
            />
          </div>
          <div className="relative">
            <h3 className="lg:text-3xl md:text-2xl text-slate-300 text-center font-outline-1 text-xl font-semibold">
              این پروژه در دست ساخت می باشد
            </h3>
          </div>
        </div>
      </main>
      <footer>
        <p className="text-sm text-slate-500 text-center">
          <span>توسعه داده شده توسط</span>{" "}
          <Link
            className="text-slate-700 underline underline-offset-2"
            href={"https://github.com/erfan114"}
          >
            عرفان حافظی
          </Link>
        </p>
      </footer>
    </div>
  );
}
