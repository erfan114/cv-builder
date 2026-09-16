import { FC } from "react";
import { ToolbarDropdown } from "../dropdown";
import { buttonDropdownItem } from "../dropdown/item/builder";

export const HelpTools: FC = () => {
  return (
    <ToolbarDropdown
      name="کمک"
      items={[
        buttonDropdownItem("آموزش بخش ها", "welcome", () => {}),
        buttonDropdownItem("استفاده از رزومه های پیشفرض", "how-to-use", () => {}),
      ]}
    />
  );
};
