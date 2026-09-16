import { pageWithFooter } from "@/modules/core/helpers/page.helper";
import { HomeFeatures } from "@/modules/home/components/Features";
import { HomeHero } from "@/modules/home/components/Hero";

export default function Home() {
  return pageWithFooter(
    <div className="flex flex-col h-full p-5 gap-20">
      <HomeHero />
      <HomeFeatures />
    </div>
  );
}
