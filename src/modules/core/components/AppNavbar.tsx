import { Button, Tag } from "antd";
import { Combine, PencilRuler } from "lucide-react";
import { FC } from "react";

export const AppNavbar: FC = () => {
  return (
    <header className="shadow shadow-slate-200 sticky top-0 px-5 py-4 font-sans flex justify-between items-center z-20 bg-white/90 backdrop-blur-md">
      <div className="flex gap-2.5 items-center">
        <Combine
          className="text-blue-600"
          size={30}
        />
        <h3 className="text-xl">رزومه ساز</h3>
        <Tag>V0.1.0</Tag>
      </div>
      <Button
        variant="solid"
        color="blue"
        size="large"
        href="/editor"
        icon={
          <div className="flex items-center">
            <PencilRuler className="text-blue-300" />
          </div>
        }
      >
        <span className="font-sans font-medium">ویرایشگر</span>
      </Button>
    </header>
  );
};
