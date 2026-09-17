import { FC } from "react";
import { DraggableComponent } from "./DraggableComponent";

export const EditorComponentsSidebar: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-2 flex-1 @container">
      <div
        className="grid grid-cols-2 @min-[200px]:grid-cols-3 gap-2 overflow-y-auto h-fit"
        dir="ltr"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <DraggableComponent id={`c-${i}`} key={i} />
        ))}
      </div>
    </div>
  );
};
