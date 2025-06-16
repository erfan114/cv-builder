import { Languages, Layers, Palette, Save } from "lucide-react";
import { FC } from "react";
import { FeatureCard } from "./FeatureCard";

export const HomeFeatures: FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl w-full gap-5">
      <h3 className="text-3xl text-center font-medium text-balance">
        قابلیت های <span className="text-blue-600">برجسته</span> رزومه ساز
      </h3>
      <div className="grid grid-cols-8 gap-5">
        <FeatureCard
          title={<>طراحی و ویرایش آسان رزومه</>}
          description={
            <>
              با رابط کاربری ساده و کاربرپسند، به راحتی رزومه‌ٔ خود را طراحی و
              ویرایش کنید. نیازی به دانش فنی نیست، فقط کافیست اطلاعات خود را
              وارد کنید.
            </>
          }
          icon={Palette}
          wide
        />
        <FeatureCard
          title={<>دسترسی به قالب‌های متنوع</>}
          description={
            <>
              از بین ده‌ها قالب مدرن، قالب دلخواه خود را انتخاب کنید و آن را
              مطابق سلیقه‌تان شخصی‌سازی کنید.
            </>
          }
          icon={Layers}
          invert
        />
        <FeatureCard
          title={<>ذخیره‌سازی و اشتراک گذاری سریع</>}
          description={
            <>
              تنها با یک کلیک رزومه خودتان را روی مرورگر خودتان ذخیره کنید و
              برای اشتراک گذاری میتوانید فایل پروژه را دانلود کنید و آن را به
              اشتراک بگذارید
            </>
          }
          icon={Save}
          invert
        />
        <FeatureCard
          title={<>پشتیبانی از چند زبان و رزومه چندگانه</>}
          description={
            <>
              امکان ساخت رزومه به زبان‌های مختلف و ایجاد چندین نسخه از رزومه
              برای موقعیت‌های شغلی مختلف را خواهید داشت.
            </>
          }
          icon={Languages}
          wide
        />
      </div>
    </div>
  );
};
