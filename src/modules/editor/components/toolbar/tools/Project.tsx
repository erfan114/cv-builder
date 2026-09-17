import { FC } from "react";
import { ToolbarDropdown } from "../dropdown";
import {
  buttonDropdownItem,
  dividerDropdownItem,
  toggleDropdownItem,
} from "../dropdown/item/builder";

export const ProjectTools: FC = () => {
  return (
    <ToolbarDropdown
      name="پروژه"
      items={[
        buttonDropdownItem("پروژه جدید", "new-project", () => {}),
        dividerDropdownItem(),
        buttonDropdownItem(
          "بارگذاری پروژه ...",
          "open-project",
          () => {
            console.log("Open project called");
          },
          {
            shortcut: "Shift+O",
          },
        ),
        buttonDropdownItem("پروژه های اخیر", "recent-projects", () => {}),
        dividerDropdownItem(),
        buttonDropdownItem(
          "ذخیره",
          "save-project",
          () => {
            console.log("Save called");
          },
          {
            shortcut: "Shift+S",
          },
        ),
        buttonDropdownItem(
          "ذخیره به عنوان ...",
          "save-project-as",
          () => {
            console.log("Save as called");
          },
          {
            shortcut: "Shift+A+S",
          },
        ),
        dividerDropdownItem(),
        toggleDropdownItem("ذخیره سازی خودکار", "autosave", false, () => {}),
        dividerDropdownItem(),
        buttonDropdownItem(
          "بستن پروژه",
          "close-project",
          () => {
            console.log("Close project called");
          },
          {
            shortcut: "Shift+K",
          },
        ),
        buttonDropdownItem("بازگشت به خانه", "home", () => {}),
      ]}
    />
  );
};
