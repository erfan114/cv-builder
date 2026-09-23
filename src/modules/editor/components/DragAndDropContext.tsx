"use client";

import { FC, PropsWithChildren } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useViewport } from "@xyflow/react";

export const DragAndDropContext: FC<PropsWithChildren> = ({ children }) => {
  const { x, y } = useViewport();

  const onDragEnd = (event: DragEndEvent) => {
    if (!event.over?.id) return;

    console.log(event, x, y);
  };

  return <DndContext onDragEnd={onDragEnd}>{children}</DndContext>;
};
