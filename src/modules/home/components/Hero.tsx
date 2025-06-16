import { githubPath } from "@/modules/core/helpers/github.helper";
import { Button } from "antd";
import { Combine } from "lucide-react";
import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <div className="lg:h-96 flex flex-col-reverse lg:flex-row bg-blue-600 rounded-2xl p-8 lg:p-10 lg:gap-8 relative overflow-hidden min-h-96">
      {/* Right side */}
      <div className="text-white font-medium lg:max-w-2xl h-full flex flex-col z-10 lg:flex-auto flex-1">
        <h3 className="text-3xl leading-relaxed text-balance">
          با رزومه ساز به راحتی رزومه خودت رو طراحی کن !
        </h3>
        <p className="mt-5 text-balance">
          با وب اپلیکشن رزومه ساز به راحتی میتونی هر رزومه با هر شکل و ظاهری که
          خودت دوست داری درست کنی
        </p>
        <div className="mt-auto pt-5 grid grid-row-2 xl:grid-cols-2 gap-3">
          <Button
            color="blue"
            variant="outlined"
            size="large"
            href={githubPath("/editor")}
          >
            <span className="font-medium">همین الان شروع کن</span>
          </Button>
          <Button
            color="blue"
            variant="solid"
            size="large"
            href={githubPath("/templates")}
          >
            <span className="font-medium">مشاهده طرح های پیش فرض</span>
          </Button>
        </div>
      </div>
      {/* Left side */}
      <div className="flex lg:justify-end lg:flex-1 items-center xl:pl-20 lg:pl-10 md:pl-2 mx-auto z-10">
        <Combine className="text-white lg:size-56 hidden lg:block" />
      </div>
      <Combine className="absolute lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 top-1/2 -translate-y-1/2 z-0 text-blue-500 size-96 lg:size-[40rem]" />
    </div>
  );
};
