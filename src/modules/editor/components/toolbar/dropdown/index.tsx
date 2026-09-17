import { useDropdownItems } from "@/modules/editor/hooks/useDropdownItems";
import { Button, Dropdown, DropdownProps, MenuProps } from "antd";
import { FC, useState } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import { DropdownItemType } from "./item";

export interface ToolbarDropdownProps {
  name: string;
  items: DropdownItemType[];
}

export const ToolbarDropdown: FC<ToolbarDropdownProps> = ({ name, items }) => {
  const [open, setOpen] = useState(false);

  const { normalizedItems, handlerMap, keepOpenMap, keyMap, keyHandlers } =
    useDropdownItems(items);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const handler = handlerMap[key];
    handler();

    const keepOpen = keepOpenMap[key];
    setOpen(keepOpen);
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  return (
    <>
      <Dropdown
        open={open}
        onOpenChange={handleOpenChange}
        trigger={["click"]}
        menu={{
          onClick: handleMenuClick,
          items: normalizedItems,
        }}
      >
        <Button type="text" variant="text" size="small">
          {name}
        </Button>
      </Dropdown>
      <GlobalHotKeys keyMap={keyMap} handlers={keyHandlers} allowChanges />
    </>
  );
};
