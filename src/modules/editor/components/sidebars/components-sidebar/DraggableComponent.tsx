"use client";

import { cn } from "@/modules/ui/helpers/cn.helper";
import { useDraggable } from "@dnd-kit/core";
import { Combine } from "lucide-react";
import { FC } from "react";

export interface DraggableComponentProps {
  id: string;
}

export const DraggableComponent: FC<DraggableComponentProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable(
    {
      id,
    }
  );

  const thisIsActive = active?.id === id;

  return (
    <div
      ref={setNodeRef}
      style={
        transform && !thisIsActive
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            }
          : undefined
      }
      {...listeners}
      {...attributes}
      className={cn(
        "h-12 flex items-center justify-center border rounded bg-white",
        thisIsActive && "opacity-50"
      )}
      aria-describedby={id}
    >
      <Combine className="text-slate-400" />
    </div>
  );
};
