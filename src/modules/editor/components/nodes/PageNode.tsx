import { useDroppable } from "@dnd-kit/core";
import { NodeProps } from "@xyflow/react";
import { FC } from "react";

export const PageNode: FC<NodeProps> = ({ data }) => {
  const label = data.label as string | undefined;
  const { setNodeRef } = useDroppable({
    id: "base-node",
  });

  return (
    <div ref={setNodeRef} className="bg-white border p-5 h-210.5 w-148.75">
      {label}
    </div>
  );
};
