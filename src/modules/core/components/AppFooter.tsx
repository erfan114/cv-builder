import { Combine, QrCode } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Separator: FC = () => (
  <div className="flex items-center gap-3">
    <hr className="flex-1" />
    <Combine
      className="text-blue-600"
      size={20}
    />
    <hr className="flex-1" />
  </div>
);

export const AppFooter: FC = () => {
  return (
    <div className="flex flex-col font-sans">
      <Separator />
      <div className="flex px-5 py-4">
        <div className="flex md:flex-row flex-col md:justify-between flex-1 gap-5 items-center">
          <div className="flex flex-col md:items-start items-center">
            <div className="flex gap-2 items-center">
              <Combine
                className="text-blue-600 hidden md:block"
                size={24}
              />
              <h3 className="text-lg">رزومه ساز</h3>
            </div>
            <p className="text-sm leading-relaxed">
              اپلیکشن تحت وب طراحی و ساخت رزومه
            </p>
          </div>
          <div className="flex gap-1.5 md:flex-row flex-col items-center text-sm">
            <QrCode className="text-blue-600" />
            <span>
              طراحی و توسعه داده شده توسط{" "}
              <Link
                className="text-blue-600 font-bold"
                href={"https://github.com/erfan114"}
              >
                عرفان حافظی
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
