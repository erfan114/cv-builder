import { ItemType } from "antd/es/menu/interface";
import { useMemo } from "react";
import { DropdownItemType } from "../components/toolbar/dropdown/item";

export const useDropdownItems = (items: DropdownItemType[]) => {
  return useMemo(() => {
    const normalizedItems: ItemType[] = [];
    const handlerMap: { [key: string]: () => void } = {};
    const keepOpenMap: { [key: string]: boolean } = {};
    const keyMap: { [key: string]: string } = {};
    const keyHandlers: { [key: string]: () => void } = {};

    for (const { interact, options, ...rest } of items) {
      normalizedItems.push(rest);

      if (!rest.key) {
        continue;
      }

      const key = rest.key.toString();

      keepOpenMap[key] = options?.keepOpen ?? false;

      if (!interact) {
        continue;
      }

      handlerMap[key] = interact;

      if (!options?.shortcut) {
        continue;
      }

      keyMap[key] = options.shortcut;
      keyHandlers[key] = interact;
    }

    return { normalizedItems, handlerMap, keepOpenMap, keyMap, keyHandlers };
  }, [items]);
};
