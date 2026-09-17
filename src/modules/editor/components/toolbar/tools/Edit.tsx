import { FC } from "react";
import { ToolbarDropdown } from "../dropdown";
import { buttonDropdownItem } from "../dropdown/item/builder";

export const EditTools: FC = () => {
  return (
    <ToolbarDropdown
      name="ویرایش"
      items={[
        buttonDropdownItem(
          "برگرداندن",
          "undo",
          () => {
            console.log("Undo called");
          },
          {
            shortcut: "Shift+U",
          },
        ),
        buttonDropdownItem(
          "باز انجام",
          "redo",
          () => {
            console.log("Redo called");
          },
          {
            shortcut: "Shift+R",
          },
        ),
      ]}
    />
  );
};
