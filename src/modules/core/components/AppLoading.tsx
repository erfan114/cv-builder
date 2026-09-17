import { Combine } from "lucide-react";
import { FC } from "react";

export const AppLoading: FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Combine className="animate-pulse size-32 text-blue-600" />
    </div>
  );
};
