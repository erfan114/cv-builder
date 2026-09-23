"use client";

import { FC, useState } from "react";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { DraggableComponent } from "./sidebars/components-sidebar/DraggableComponent";

export const DragAndDropOverlay: FC = () => {
  const [draggedId, setDraggedId] = useState<string | null>(null);

  useDndMonitor({
    onDragStart(event) {
      setDraggedId(event.active.id as string);
    },
    onDragEnd() {
      setDraggedId(null);
    },
    onDragCancel() {
      setDraggedId(null);
    },
  });

  return (
    <DragOverlay>
      {draggedId ? <DraggableComponent id={draggedId} /> : null}
    </DragOverlay>
  );
};
