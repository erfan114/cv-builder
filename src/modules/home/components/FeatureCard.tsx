import { cn } from "@/modules/ui/helpers/cn.helper";
import { LucideIconType } from "@/modules/ui/types";
import { FC, ReactNode } from "react";

interface FeatureCardProps {
  title: ReactNode;
  description: ReactNode;
  icon: LucideIconType;
  wide?: boolean;
  invert?: boolean;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  wide,
  invert,
  icon: Icon,
}) => {
  return (
    <div
      className={cn(
        "shadow rounded-lg p-3 border md:col-span-4 col-span-8",
        wide ? "lg:col-span-5" : "lg:col-span-3",
        invert ? "bg-blue-600" : "bg-white"
      )}
    >
      <div className="flex gap-3 items-center">
        <div
          className={cn(
            "rounded-full aspect-square size-12 flex items-center justify-center",
            invert ? "bg-white" : "bg-blue-600"
          )}
        >
          <Icon className={cn(invert ? "text-blue-600" : "text-white")} />
        </div>
        <h4
          className={cn(
            "font-medium text-lg",
            invert ? "text-white" : "text-black"
          )}
        >
          {title}
        </h4>
      </div>
      <p className={cn("mt-3", invert && "text-white")}>{description}</p>
    </div>
  );
};
