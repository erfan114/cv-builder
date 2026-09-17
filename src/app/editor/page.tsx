import { pageMetadata } from "@/modules/core/helpers/metadata.helper";
import { DragAndDropContext } from "@/modules/editor/components/DragAndDropContext";
import { DragAndDropOverlay } from "@/modules/editor/components/DragAndDropOverlay";
import { EditorEditArea } from "@/modules/editor/components/EditArea";
import { EditorComponentsSidebar } from "@/modules/editor/components/sidebars/components-sidebar";
import { EditorPropertiesSidebar } from "@/modules/editor/components/sidebars/properties-sidebar";
import { ToolBar } from "@/modules/editor/components/toolbar";
import { ReactFlowProvider } from "@xyflow/react";
import { Splitter } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata("Editor");

export default function Editor() {
  return (
    <ReactFlowProvider>
      <ToolBar />
      <div className="flex-1 flex min-h-0">
        <DragAndDropContext>
          <DragAndDropOverlay />
          <Splitter className="flex-1 min-h-0">
            <Splitter.Panel
              className="flex overflow-hidden"
              min={"15%"}
              defaultSize={"15%"}
              max={"20%"}
            >
              <EditorComponentsSidebar />
            </Splitter.Panel>
            <Splitter.Panel className="flex">
              <EditorEditArea />
            </Splitter.Panel>
            <Splitter.Panel min={"15%"} defaultSize={"20%"} max={"20%"}>
              <EditorPropertiesSidebar />
            </Splitter.Panel>
          </Splitter>
        </DragAndDropContext>
      </div>
    </ReactFlowProvider>
  );
}
