import { Button } from "antd";
import { Construction } from "lucide-react";
import { FC } from "react";
import { githubPath } from "../helpers/github.helper";

export const UnderConstruction: FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center font-sans gap-1.5 text-center p-5">
      <Construction className="text-blue-600 size-20" />
      <h3 className="text-xl">این صفحه در حال توسعه میباشد</h3>
      <p className="text-sm">
        با عرض تاسف این صفحه در حال توسعه میباشد، لطفا بعدا دوباره تلاش کنید
      </p>
      <Button
        href={githubPath("/")}
        variant="filled"
        color="blue"
      >
        <span className="font-sans">بازگشت به صفحه اصلی</span>
      </Button>
    </div>
  );
};
