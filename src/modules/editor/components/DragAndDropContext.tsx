"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useViewport } from "@xyflow/react";
import { FC, PropsWithChildren } from "react";

export const DragAndDropContext: FC<PropsWithChildren> = ({ children }) => {
  const { x, y } = useViewport();

  const onDragEnd = (event: DragEndEvent) => {
    if (!event.over?.id) return;

    console.log(event, x, y);
  };

  return <DndContext onDragEnd={onDragEnd}>{children}</DndContext>;
};
