import { ItemType } from "antd/es/menu/interface";
import { Check } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { cn } from "@/modules/ui/helpers/cn.helper";

export type DropdownItemOptions = {
  shortcut?: string;
  keepOpen?: boolean;
};

export type DropdownItemType = {
  interact?: () => void;
  options?: DropdownItemOptions;
} & ItemType;

export type DropdownLabelItemProps = PropsWithChildren & {
  checked?: boolean;
  shortcut?: string;
};

export const DropdownItemLabel: FC<DropdownLabelItemProps> = ({
  children,
  checked,
  shortcut,
}) => {
  return (
    <div className="flex items-center gap-2 pe-4 min-w-60">
      <Check
        size={16}
        className={cn("text-blue-600", !checked && "opacity-0")}
      />
      <div className={cn("flex-1", shortcut && "pe-5")}>{children}</div>
      {shortcut && <code className="text-neutral-400 text-xs">{shortcut}</code>}
    </div>
  );
};
