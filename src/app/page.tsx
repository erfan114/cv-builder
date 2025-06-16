import { generateDynamicMetadata } from "@/modules/core/helpers/metadata.helper";
import { pageWithFooter } from "@/modules/core/helpers/page.helper";
import { HomeFeatures } from "@/modules/home/components/Features";
import { HomeHero } from "@/modules/home/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = generateDynamicMetadata({ pageName: "Home" });

export default function Home() {
  return pageWithFooter(
    <div className="flex flex-col h-full font-sans p-5 gap-20">
      <HomeHero />
      <HomeFeatures />
    </div>
  );
}
